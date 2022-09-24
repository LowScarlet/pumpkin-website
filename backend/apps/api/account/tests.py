from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage

msg = EmailMessage('Request Callback',
                    'Here is the message.', to=['namaetohyaakiradesu@gmail.com'])
msg.send()

print("Success")