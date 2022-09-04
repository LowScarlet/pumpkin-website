from account.models import Profile
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class Basic_UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'url',
            'profile',
            'username', 
            'date_joined', 
        ]
class Full_UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'url',
            'profile',
            'username', 
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