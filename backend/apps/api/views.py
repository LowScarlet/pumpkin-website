from account.models import Profile
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializer import (Auth_TokenSerializer, Basic_ProfileSerializer,
                         Basic_UserSerializer, Full_ProfileSerializer,
                         Full_UserSerializer)


class PublicViewSet(APIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        return Response(settings.PROJECT)
        
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = permissions.IsAuthenticated

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_UserSerializer
            
        self.http_method_names = ['get', 'head']
        return Basic_UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = permissions.IsAuthenticated

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_ProfileSerializer
            
        self.http_method_names = ['get', 'head']
        return Basic_ProfileSerializer

class Auth_TokenViewSet(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = Auth_TokenSerializer
    permission_classes = permissions.IsAdminUser
