from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage
import sys

print([(x*10)**2 for x in range(25)]+[sys.maxsize])
print(len([(x*10)**2 for x in range(25)]))