from django.urls import include, path
from rest_framework import routers

from .views import (Rest_Auth_TokenViewSet, Rest_ProfileViewSet,
                    Rest_UserViewSet)

router = routers.DefaultRouter()

router.register('users', Rest_UserViewSet)
router.register('profiles', Rest_ProfileViewSet)
router.register('auth_token', Rest_Auth_TokenViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
