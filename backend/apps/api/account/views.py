import re
from django.conf import settings
from api.account.models import Discord_Account
from api.account.rank import BENEFIT, RANK
from api.account.serializer import (Full_Discord_AccountSerializer,
                                    Full_ProfileSerializer,
                                    Full_UserSerializer)
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
import requests
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

# Rank & Benefits


class RankViewSet(APIView):
    # Rank
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        rank = RANK
        for x in RANK:
            rank[x]["url"] = f"{request.build_absolute_uri()}/{x}"
        if kwargs.get('id'):
            rank[kwargs.get('id')]["url"] = f"{request.build_absolute_uri()}"
            return Response(rank[kwargs.get('id')])
        return Response(rank)


class BenefitViewSet(APIView):
    # Benefit of Rank
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        benefit = BENEFIT
        for x in BENEFIT:
            benefit[x]["url"] = f"{request.build_absolute_uri()}/{x}"
        if kwargs.get('id'):
            benefit[kwargs.get(
                'id')]["url"] = f"{request.build_absolute_uri()}"
            return Response(benefit[kwargs.get('id')])
        return Response(benefit)

# User


class UserViewSet(APIView):
    # User View Set
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request):
        serializer_context = {
            'request': request,
        }

        user = request.user

        if settings.PRODUCTION and request.META.get('HTTP_SECRET_CODE') != settings.SECRET_CODE:
            return Response(
                {'detail': 'Requires Secret-Code header'},
                status=status.HTTP_403_FORBIDDEN
            )

        data = request.data
        if not data:
            return Response(
                {'detail': 'None of the data you submitted was changed!'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            username = data.get('username')
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            bio = data.get('bio')
            current_password = data.get('current_password')
            password = data.get('new_password')
            re_password = data.get('confirm_password')

            if bio:
                if len(bio) < 13:
                    return Response(
                        {'detail': 'The minimum length of the bio is more than 12 characters!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                user.profile.bio = bio

            if first_name:
                if len(first_name) < 5:
                    return Response(
                        {'detail': 'The minimum length of the first name is more than 4 characters!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                user.first_name = first_name
                if not user.first_name:
                    user.first_name = ''

            if last_name:
                if len(first_name) < 5:
                    return Response(
                        {'detail': 'The minimum length of the last name is more than 4 characters!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                user.last_name = last_name
                if not user.last_name:
                    user.last_name = ''

            if email:
                if len(email) < 1:
                    return Response(
                        {'detail': 'Enter email value!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                try:
                    validate_email(email)
                except ValidationError:
                    return Response(
                        {'detail': 'Invalid Email'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                if email != user.email and User.objects.filter(email=email).exists():
                    return Response(
                        {'detail': 'Email already used!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                user.email_confirmation = False
                user.email = email

            if current_password:
                if not user.check_password(current_password):
                    return Response(
                        {'detail': 'The password you entered is invalid!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                if not password and not re_password:
                    return Response(
                        {'detail': 'You must enter your new password!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                if len(password) < 8:
                    return Response(
                        {'detail': 'Password must be at least 8 characters'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                if password != re_password:
                    return Response(
                        {'detail': 'password does not match'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                user.set_password(password)
            
            if username:
                if not re.match('^[a-zA-Z0-9_]+$', username): 
                    return Response(
                        {'detail': 'You can only create usernames with alphanumeric and underscore as spaces if needed!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                if len(username) < 5:
                    return Response(
                        {'detail': 'The minimum length of the username is more than 4 characters!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                if username != user.username and User.objects.filter(username=username).exists():
                    return Response(
                        {'detail': 'Username already exists!'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                user.username = username
            
            user.save()

            user_data = Full_UserSerializer(user, context=serializer_context)
            profile_data = Full_ProfileSerializer(
                user.profile, context=serializer_context)
            return Response(
                {
                    'detail': 'Successfully edited your account!',
                    'user': user_data.data,
                    'profile': profile_data.data
                },
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'detail': 'Unknown error! Contact Staff for consultation on this matter'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def get(self, request, format=None):
        serializer_context = {
            'request': request,
        }

        user = request.user

        user_data = Full_UserSerializer(user, context=serializer_context)
        profile_data = Full_ProfileSerializer(
            user.profile, context=serializer_context)
        if Discord_Account.objects.filter(user=user):
            discord_account_data = Full_Discord_AccountSerializer(
                user.discord_account, context=serializer_context).data
        else:
            discord_account_data = {}
        return Response(
            {
                'user': user_data.data,
                'profile': profile_data.data,
                'discord_account': discord_account_data,
            },
            status=status.HTTP_200_OK
        )


class User_RegisterViewSet(APIView):
    # User Register View Set
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        if settings.PRODUCTION and request.META.get('HTTP_SECRET_CODE') != settings.SECRET_CODE:
            return Response(
                {'detail': 'Requires Secret-Code header'},
                status=status.HTTP_403_FORBIDDEN
            )
        try:
            data = request.data

            username = data.get('username')
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            password = data.get('password')
            re_password = data.get('re_password')
            
            if not re.match('^[a-zA-Z0-9_]+$', username): 
                return Response(
                    {'detail': 'You can only create usernames with alphanumeric and underscore as spaces if needed!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if not password or not re_password:
                return Response(
                    {'detail': 'Password required!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if not first_name:
                return Response(
                    {'detail': 'First name required!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if not email:
                return Response(
                    {'detail': 'Email required'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if password != re_password:
                return Response(
                    {'detail': 'password does not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if len(password) < 8:
                return Response(
                    {'detail': 'Password must be at least 8 characters'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if User.objects.filter(username=username).exists():
                return Response(
                    {'detail': 'Username already exists!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if User.objects.filter(email=email).exists():
                return Response(
                    {'detail': 'Email already used!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            User.objects.create_user(
                username=username,
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=password,
            )
            return Response(
                {'detail': 'Account created successfully!'},
                status=status.HTTP_201_CREATED
            )
        except:
            return Response(
                {'detail': 'Unknown error! Contact Staff for consultation on this matter'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# Third Party Account


class Third_Party_DiscordViewSet(APIView):
    # User View Set
    permission_classes = [permissions.IsAuthenticated]

    def __init__(self):
        self.api_end_point = 'https://discord.com/api/v10'
        self.client_id = '1024709157393268868'
        self.client_secret = 'h8cv8a9DJTnB5iDQesDaixEUlRVztHL6'
        self.redirect_uri = f'{settings.FRONTEND_URL}/account/third_party/discord'

    # Discord exchange code
    def exchange_code(self, code=None):
        if not code:
            return {'detail': 'Code is null'}, 400
        data = {
            'code': code,
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'authorization_code',
            'redirect_uri': self.redirect_uri
        }
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        r = requests.post('%s/oauth2/token' % self.api_end_point, data=data, headers=headers)
        if r.status_code == 200:
            return r.json(), r.status_code
        return {'detail': r.json()['error_description']}, r.status_code

    # Discord exchange code
    def get_me(self, token=None):
        if not token:
            return {'detail': 'Token is null'}, 400
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': f'Bearer {token}'
        }
        r = requests.get('%s/users/@me' % self.api_end_point, headers=headers)
        if r.status_code == 200:
            return r.json(), r.status_code
        return {'detail': r.json()['message']}, r.status_code

    # Register/Update a third party account
    def post(self, request, format=None):
        # serializer_context = {
        #     'request': request,
        # }

        user = request.user
        code = request.GET.get('code')

        # Fetching
        exchange_code, exchange_code_status = self.exchange_code(code)
        if exchange_code_status != 200:
            return Response(
                exchange_code,
                status=exchange_code_status
            )
        get_me, get_me_status = self.get_me(exchange_code.get('access_token'))
        if get_me_status != 200:
            return Response(
                get_me,
                status=get_me_status
            )

        member1 = Discord_Account.objects.filter(user=user)
        if member1.exists():
            member1 = member1.first()
            if member1.uid == get_me.get('id'):
                member1.active = True
                member1.uid = get_me.get('id')
                member1.nickname = get_me.get('username')
                member1.avatar_code = get_me.get('avatar')

                member1.access = exchange_code.get('access_token')
                member1.refresh = exchange_code.get('refresh_token')

                member1.save()
                return Response(
                    {'detail': 'Update successful'},
                    status=200
                )
            return Response(
                {'detail': 'User does not match'},
                status=400
            )
        
        member = Discord_Account.objects.filter(uid=get_me.get('id'))
        if member.exists():
            member = member.first()
            if not member.user:
                member.user = user
                member.active = True
                member.uid = get_me.get('id')
                member.nickname = get_me.get('username')
                member.avatar_code = get_me.get('avatar')

                member.access = exchange_code.get('access_token')
                member.refresh = exchange_code.get('refresh_token')

                member.save()
                return Response(
                    {'detail': 'Successfully linked discord account {0}'},
                    status=200
                )
            return Response(
                {'detail': 'This discord account has been linked to one of the Pumpkin Project member accounts'},
                status=400
            )
        member = Discord_Account.objects.create(
            user=user,
            active=True,
            uid=get_me.get('id'),
            nickname=get_me.get('username'),
            avatar_code=get_me.get('avatar'),
            access=exchange_code.get('access_token'),
            refresh=exchange_code.get('refresh_token'),
        )
        return Response(
            {'detail': 'Successfully linked discord account {1}'},
            status=200
        )

    # Delete a third party account
    def delete(self, request, format=None):

        user = request.user

        member = Discord_Account.objects.filter(user=user)
        if member.exists():
            member = member.first()
            member.user = None
            member.save()
            return Response(
                {'detail': 'Successfully unlinked discord account {0}'},
                status=200
            )
        return Response(
            {'detail': 'You haven''t linked a discord account before!'},
            status=400
        )
        


            
