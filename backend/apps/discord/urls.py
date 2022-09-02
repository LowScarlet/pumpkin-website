from django.urls import path
from . import views

app_name = 'discord'
urlpatterns = [
    path('api/levelmap', views.Discord_LevelMapViewSet.as_view(), name='levelmaps'),
    path('api/levelmap/<int:id>', views.Discord_LevelMapViewSet.as_view(), name='levelmaps_id'),
]
