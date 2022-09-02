from django.urls import include, path
from rest_framework import routers

from .views import (Auth_TokenViewSet, Discord_MemberViewSet, ProfileViewSet,
                    UserViewSet, PublicViewSet)

router = routers.DefaultRouter()

router.register('users', UserViewSet)
router.register('profiles', ProfileViewSet)
router.register('auth_token', Auth_TokenViewSet)
router.register('discord_member', Discord_MemberViewSet)

urlpatterns = [
    path('', PublicViewSet.as_view()),
    path('models/', include(router.urls)),
]
