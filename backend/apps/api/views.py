from account.models import Profile
from discord.models import Discord_Member
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from web.data.api_permission_set import perms_admin_only, perms_authenticated
from web.data.web_attribute import *

from .serializer import (Auth_TokenSerializer, Basic_ProfileSerializer,
                         Basic_UserSerializer, Discord_MemberSerializer,
                         Full_ProfileSerializer, Full_UserSerializer)


class PublicViewSet(APIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        value = {
            "web_name": WEB_NAME,
            "web_version": WEB_VERSION,
            "discord_community": DISCORD_COMMUNITY,
            "social_media": SOCIAL_MEDIA,
        }
        return Response(value)
        
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = perms_authenticated

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_UserSerializer
            
        self.http_method_names = ['get', 'head']
        return Basic_UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = perms_authenticated

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_ProfileSerializer
            
        self.http_method_names = ['get', 'head']
        return Basic_ProfileSerializer

class Auth_TokenViewSet(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = Auth_TokenSerializer
    permission_classes = perms_admin_only

class Discord_MemberViewSet(viewsets.ModelViewSet):
    queryset = Discord_Member.objects.all()
    serializer_class = Discord_MemberSerializer
    permission_classes = perms_admin_only
