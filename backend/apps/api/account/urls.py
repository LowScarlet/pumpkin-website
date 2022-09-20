from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView, TokenVerifyView)

from . import views

app_name = 'account'
urlpatterns = [
    # Rank & Benefits
    path('ranks', views.RankViewSet.as_view(), name='api_ranks'),
    path('ranks/<str:id>', views.RankViewSet.as_view(), name='api_ranks_id'),
    path('benefits', views.BenefitViewSet.as_view(), name='api_benefits'),
    path('benefits/<str:id>', views.BenefitViewSet.as_view(), name='api_benefits_id'),

    # User
    path('user', views.UserViewSet.as_view(), name='api_user'),
    path('user/register', views.User_RegisterViewSet.as_view(),
         name='api_user_register'),
    path('user/token', TokenObtainPairView.as_view(), name='api_jwt_token'),
    path('user/token/refresh', TokenRefreshView.as_view(),
         name='api_jwt_token_refresh'),
    path('user/token/verify', TokenVerifyView.as_view(),
         name='api_jwt_token_verify'),
]