from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions, viewsets

from discord.models import levelmap

perms_admin_only = [permissions.IsAuthenticated, permissions.IsAdminUser]

class Discord_LevelMapViewSet(APIView):
    permission_classes = perms_admin_only

    def get(self, request, *args, **kwargs):
        map = {}
        for i,x in enumerate(levelmap()):
            try:
                max_exp = levelmap()[i+1]
            except:
                max_exp = 2147483647

            map[i] = {
                "url": f"{request.build_absolute_uri()}/{i}",
                "level": i,
                "min_exp": x,
                "max_exp": max_exp
            }

        if kwargs.get('id'):
            map[kwargs.get('id')]["url"] = f"{request.build_absolute_uri()}"
            return Response(map[kwargs.get('id')])

        return Response(map)