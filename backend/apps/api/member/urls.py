from django.urls import path

from . import views

app_name = 'member'
urlpatterns = [
    path('<member>', views.MemberViewSet.as_view(), name='api_member'),
]
