from urllib import response
from api.account.serializer import (Basic_ProfileSerializer, Basic_UserSerializer,
                                    Full_ProfileSerializer, Full_UserSerializer)
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import redirect

# User


class MemberViewSet(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, member, cmd=None, format=None):
        serializer_context = {
            'request': request,
        }

        user = request.user
        try:
            member = User.objects.get(username=member)

            member.profile.views += 1
            member.save()

            if user.is_staff or user == member:
                user_data = Full_UserSerializer(member, context=serializer_context)
                profile_data = Full_ProfileSerializer(
                    member.profile, context=serializer_context)
            else:
                user_data = Basic_UserSerializer(
                    member, context=serializer_context)
                profile_data = Basic_ProfileSerializer(
                    member.profile, context=serializer_context)
            
            response = {
                'user': user_data.data,
                'profile': profile_data.data,
            }
            if user.is_authenticated:
                response['other'] = {
                    'liked': user in member.profile.likes.all(),
                    'disliked': user in member.profile.dislikes.all(),
                }
            return Response(response,
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {
                    'detail': f"Member not found!",
                },
                status=status.HTTP_404_NOT_FOUND
            )

    def post(self, request, member, cmd=None, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(
                {
                    'detail': f"Authentication required!",
                },
                status=status.HTTP_401_UNAUTHORIZED
            )
        try:
            member = User.objects.get(username=member)

            if cmd == "toggle_like":
                if user in member.profile.likes.all():
                    member.profile.likes.remove(user)
                else:
                    member.profile.likes.add(user)
                    if user in member.profile.dislikes.all():
                        member.profile.dislikes.remove(user)
                member.save()

                return redirect("member:api_member", member=member.username)

            if cmd == "toggle_dislike":
                if user in member.profile.dislikes.all():
                    member.profile.dislikes.remove(user)
                else:
                    member.profile.dislikes.add(user)
                    if user in member.profile.likes.all():
                        member.profile.likes.remove(user)

                member.save()

                return redirect("member:api_member", member=member.username)
        except:
            return Response(
                {
                    'detail': f"Member not found!",
                },
                status=status.HTTP_404_NOT_FOUND
            )
