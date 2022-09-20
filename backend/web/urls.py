
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Apps
    path('', include('apps.api.urls')),
    path('account/', include('apps.api.account.urls')),
    path('member/', include('apps.api.member.urls')),
    path('rest/', include('apps.api.rest.urls')),
]

# DEBUG Only
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
