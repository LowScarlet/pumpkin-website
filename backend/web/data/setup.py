# Setup
import os
from pathlib import Path

import dj_database_url
from web.data.database import *
from web.data.email import *
from web.data.aws_s3 import *

# Base Dir
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Production Env
PRODUCTION = os.getenv('PRODUCTION') != None

# Debug
DEBUG = True

# Domain
MAIN_DOMAIN = 'pumpkinproject.my.id'
MEDIA_DOMAIN = 'pumpkinproject.s3.amazonaws.com'
URL_MEDIA = f"https://{MEDIA_DOMAIN}"

# Cors
CORS_ALLOW_ALL_ORIGINS = True

# Settings
if PRODUCTION:
    WEB_DOMAIN = MAIN_DOMAIN
    URL_WEB = f"https://{WEB_DOMAIN}"
    ALLOWED_HOSTS = ['.herokuapp.com', f'.{MAIN_DOMAIN}']

    SECURE_SSL_REDIRECT = True
    
    DATABASES = {
        'default': dj_database_url.config(
            default=DATABASE_URL,
            conn_max_age=600,
            ssl_require=True
        )
    }
else:
    WEB_DOMAIN = '127.0.0.1:8000'
    URL_WEB = f"http://{WEB_DOMAIN}"
    ALLOWED_HOSTS = ['.localhost', '127.0.0.1', '[::1]', 'testserver']

    SECURE_SSL_REDIRECT = False
    
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
