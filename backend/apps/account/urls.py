from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView, TokenVerifyView)

from . import views

app_name = 'account'
urlpatterns = [
    path('api/ranks', views.RankViewSet.as_view(), name='api_ranks'),
    path('api/ranks/<str:id>', views.RankViewSet.as_view(), name='api_ranks_id'),
    path('api/benefits', views.BenefitViewSet.as_view(), name='api_benefits'),
    path('api/benefits/<str:id>', views.BenefitViewSet.as_view(), name='api_benefits_id'),

    path('api/user', views.UserViewSet.as_view(), name='api_user'),
    path('api/user/register', views.User_RegisterViewSet.as_view(), name='api_user_register'),

    path('api/jwt/token', TokenObtainPairView.as_view(), name='api_jwt_token'),
    path('api/jwt/token/refresh', TokenRefreshView.as_view(), name='api_jwt_token_refresh'),
    path('api/jwt/token/verify', TokenVerifyView.as_view(), name='api_jwt_token_verify'),
]
