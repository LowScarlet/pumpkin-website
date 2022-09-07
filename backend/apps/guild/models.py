import requests
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Guild Model
class Guild(models.Model):
    ownership = models.OneToOneField(User, null=True, blank=True, related_name="get_guild_as_owner", on_delete=models.SET_NULL)

    # Basic
    guildname = models.CharField(max_length=12)
    guildname_short= models.CharField(max_length=4)

    # Media
    banner_img = models.ImageField(blank=True, null=True, upload_to="guild/banner")
    logo_img = models.ImageField(blank=True, null=True, upload_to="guild")

    # Admin, Staff & Member list
    admins = models.ManyToManyField(User, blank=True, related_name='get_guild_as_admin')
    staffs = models.ManyToManyField(User, blank=True, related_name='get_guild_as_staff')
    members = models.ManyToManyField(User, blank=True, related_name='get_guild_as_member')

    # Magic Method 
    def __str__(self):
        return self.guildname

    # Custom Method *Get Banner URL
    def banner(self):
        if self.banner_img:
            r = requests.get(f'{settings.STATIC_URL}/{self.banner_img}')
            if r.status_code == 200:
                return f"{settings.STATIC_URL}/{self.banner_img}"
            self.banner_img = None
            self.save()
        return f"{settings.FRONTEND_URL}/static/images/guild/default_banner.png"

    # Custom Method *Get Avatar URL
    def avatar(self):
        if self.avatar_img:
            r = requests.get(f'{settings.STATIC_URL}/{self.avatar_img}')
            if r.status_code == 200:
                return f"{settings.STATIC_URL}/{self.avatar_img}"
            self.avatar_img = None
            self.save()
        return f"{settings.FRONTEND_URL}/static/images/guild/default_avatar.png"
    