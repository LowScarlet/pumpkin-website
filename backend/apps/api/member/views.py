from api.account.serializer import (Basic_ProfileSerializer, Basic_UserSerializer,
                                Full_ProfileSerializer, Full_UserSerializer)
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

# User


class MemberViewSet(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, member, format=None):
        serializer_context = {
            'request': request,
        }

        user = request.user
        member = User.objects.get(username=member)

        if user.is_staff or user == member:
            user_data = Full_UserSerializer(member, context=serializer_context)
            profile_data = Full_ProfileSerializer(
                member.profile, context=serializer_context)
        else:
            user_data = Basic_UserSerializer(
                member, context=serializer_context)
            profile_data = Basic_ProfileSerializer(
                member.profile, context=serializer_context)
        return Response(
            {
                'user': user_data.data,
                'profile': profile_data.data,
            },
            status=status.HTTP_200_OK
        )
