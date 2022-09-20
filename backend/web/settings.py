"""
Django settings for web project.

Generated by 'django-admin startproject' using Django 4.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from datetime import datetime, timedelta
from pathlib import Path
import os
import dj_database_url
import sys

# Project Attribute
PROJECT = {
    "project_name": "Pumpkin Project",
    "project_version": "1.0",
    "project_date_start": datetime.strptime('1/2/17 07:00:00', '%d/%m/%y %H:%M:%S'),
    "discord_community": {
        "vanity": "https://discord.gg/UYhQCqUj6F",
        "original": "https://discord.gg/UYhQCqUj6F"
    },
    "social_media": {
        "youtube": "https://www.youtube.com/channel/UC7H9aFpR_Jx8ulruUcMvlvw/",
        "instagram": "https://www.instagram.com/pumpkinprojectid/"
    }
}
MAIN_DOMAIN = 'pumpkinproject.my.id'

# Email
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'pumpkinprojectid@gmail.com'
EMAIL_HOST_PASSWORD = 'cbcxomuuwqrakmjr'
EMAIL_PORT = 587

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-s0apc%c9&e6psjla+z+q*bw5=6k=k5=a5u$m+ggekow173)$vu'

# SECURITY WARNING: don't run with debug turned on in production!
PRODUCTION = os.getenv('PRODUCTION') != None

DATABASE_URL = 'postgres://xewjoewk:4MbhrZYjK46qPB_EJXMkv8gOU8b8BB9M@heffalump.db.elephantsql.com/xewjoewk'

if PRODUCTION:
    DEBUG = True
    BACKEND_DOMAIN = f'api.{MAIN_DOMAIN}'
    FRONTEND_DOMAIN = MAIN_DOMAIN
    BACKEND_URL = f"https://{BACKEND_DOMAIN}"
    FRONTEND_URL = f"https://{FRONTEND_DOMAIN}"

    ALLOWED_HOSTS = ['.herokuapp.com',
                     f'.{MAIN_DOMAIN}', '.vercel.app', '.now.sh']

    SECURE_SSL_REDIRECT = True

    DATABASES = {
        'default': dj_database_url.config(
            default=DATABASE_URL,
            conn_max_age=600,
            ssl_require=True
        )
    }
else:
    DEBUG = True
    BACKEND_DOMAIN = '127.0.0.1:8000'
    FRONTEND_DOMAIN = '127.0.0.1:3000'
    BACKEND_URL = f"http://{BACKEND_DOMAIN}"
    FRONTEND_URL = f"http://{FRONTEND_DOMAIN}"

    ALLOWED_HOSTS = ['.localhost', '127.0.0.1']

    SECURE_SSL_REDIRECT = False

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Lib
    'rest_framework',
    'rest_framework.authtoken',
    'storages',
    'corsheaders',

    # Apps
    'apps.api',
    'apps.api.account',
    'apps.api.member',
    'apps.api.guild',
]

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Cors
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True

# Rest Framework

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': ('rest_framework.permissions.IsAdminUser', ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

# Simple JWT

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'AUTH_HEADERS_TYPES': ('Bearer'),
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken'),
}

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

ROOT_URLCONF = 'web.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'web.wsgi.application'


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# AWS S3 Configs

AWS_ACCESS_KEY_ID = 'AKIAWVE7HGYJUKGC3WF2'
AWS_SECRET_ACCESS_KEY = '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'
if PRODUCTION:
    AWS_STORAGE_BUCKET_NAME = 'pumpkinproject-backend-production'
else:
    AWS_STORAGE_BUCKET_NAME = 'pumpkinproject-backend-nonproduction'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
AWS_DEFAULT_ACL = 'public-read'
AWS_LOCATION = 'static'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

if PRODUCTION:
    STATICFILES_DIRS = [
        os.path.join(BASE_DIR, 'static'),
    ]
    STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    DEFAULT_FILE_STORAGE = 'web.storages.MediaStore'
else:
    STATIC_URL = 'static/'
    STATICFILES_DIRS = os.path.join(BASE_DIR, 'static'),
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')
