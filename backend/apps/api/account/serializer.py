from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from api.account.models import Profile


class Basic_UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'url',
            'profile',
            'username',
            'get_full_name',
            'first_name',
            'last_name',
            'date_joined',
        ]


class Full_UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'url',
            'profile',
            'username',
            'get_full_name',
            'first_name',
            'last_name',
            'email',
            'date_joined',
        ]


class Basic_ProfileSerializer(serializers.HyperlinkedModelSerializer):
    avatar = serializers.URLField(read_only=True)
    banner = serializers.URLField(read_only=True)

    class Meta:
        model = Profile
        fields = [
            'url',
            'user',
            'rank',
            'country',
            'pumpkincoin',
            'silvercoin',
            'goldcoin',
            'likes',
            'dislikes',
            'bio',
            'views',

            'avatar',
            'banner',
        ]


class Full_ProfileSerializer(serializers.HyperlinkedModelSerializer):
    avatar = serializers.URLField(read_only=True)
    banner = serializers.URLField(read_only=True)

    class Meta:
        model = Profile
        fields = [
            'url',
            'user',
            'rank',
            'gender',
            'country',
            'city',
            'pumpkincoin',
            'silvercoin',
            'goldcoin',
            'likes',
            'dislikes',
            'bio',
            'views',

            'avatar',
            'banner',
        ]


class Auth_TokenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Token
        fields = [
            'url',
            'user',
            'key',
        ]
