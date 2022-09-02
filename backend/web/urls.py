from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # Default
    path('admin/', admin.site.urls),

    # Apps
    path('account/', include('apps.account.urls')),
    path('api/', include('apps.api.urls')),
    path('discord/', include('apps.discord.urls')),
]
