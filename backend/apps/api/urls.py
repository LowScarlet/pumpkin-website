from django.urls import path

from .views import PublicViewSet

urlpatterns = [
    path('', PublicViewSet.as_view()),
]
