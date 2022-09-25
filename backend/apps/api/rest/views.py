from api.account.models import Profile, Discord_Account
from api.account.serializer import (Auth_TokenSerializer,
                                    Basic_ProfileSerializer,
                                    Basic_UserSerializer,
                                    Full_ProfileSerializer,
                                    Full_UserSerializer,
                                    Full_Discord_AccountSerializer,
                                    Basic_Discord_AccountSerializer)
from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from rest_framework.authtoken.models import Token

# Rest Models


class Rest_UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_UserSerializer

        self.http_method_names = ['get', 'head']
        return Basic_UserSerializer


class Rest_ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_ProfileSerializer

        self.http_method_names = ['get', 'head']
        return Basic_ProfileSerializer


class Rest_Discord_AccountViewSet(viewsets.ModelViewSet):
    queryset = Discord_Account.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return Full_Discord_AccountSerializer

        self.http_method_names = ['get', 'head']
        return Basic_Discord_AccountSerializer


class Rest_Auth_TokenViewSet(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = Auth_TokenSerializer
    permission_classes = (permissions.IsAdminUser,)
