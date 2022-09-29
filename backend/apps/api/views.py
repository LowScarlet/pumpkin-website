from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class PublicViewSet(APIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        return Response(settings.PROJECT)
