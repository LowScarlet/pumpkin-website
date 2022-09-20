from django.contrib.auth.models import User
from rest_framework import permissions, status, viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from api.account.serializer import Auth_TokenSerializer
from api.account.models import Profile
from api.account.rank import BENEFIT, RANK
from api.account.serializer import (Basic_ProfileSerializer, Basic_UserSerializer,
                         Full_ProfileSerializer, Full_UserSerializer)


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

    def get(self, request, format=None):
        serializer_context = {
            'request': request,
        }

        user = request.user

        user_data = Full_UserSerializer(user, context=serializer_context)
        profile_data = Full_ProfileSerializer(
            user.profile, context=serializer_context)
        return Response(
            {
                'user': user_data.data,
                'profile': profile_data.data,
            },
            status=status.HTTP_200_OK
        )


class User_RegisterViewSet(APIView):
    # User Register View Set
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            data = request.data

            username = data.get('username')
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            password = data.get('password')
            re_password = data.get('re_password')

            if not password or not re_password:
                return Response(
                    {'detail': 'Password required!'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if not first_name or not last_name:
                return Response(
                    {'detail': 'First and last name required!'},
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
