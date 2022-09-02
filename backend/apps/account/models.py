import requests
from django.contrib.auth.models import User
from django.db import models
from web.data.setup import URL_MEDIA, URL_FRONTEND

from apps.account.rank import RANK

GENDER_CHOICES = (
    ('male', 'Male'),
    ('female', 'Female'),
)

RANK_CHOICES = []
for x in RANK: RANK_CHOICES.append((x,RANK[x]["attribute"]["displayname"]))
    
class Profile(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, related_name="profile", on_delete=models.CASCADE)

    rank = models.CharField(max_length=12, choices=RANK_CHOICES, blank=True, default="wooden")

    bio = models.TextField(max_length=500, blank=True, null=True)
    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, blank=True, default="male")
    country = models.CharField(max_length=30, blank=True, default="Indonesia")
    city = models.CharField(max_length=30, blank=True, default="Jakarta")
    banner_img = models.ImageField(blank=True, null=True, upload_to="user/banner")
    avatar_img = models.ImageField(blank=True, null=True, upload_to="user")

    pumpkincoin = models.IntegerField(default=0)
    silvercoin = models.IntegerField(default=0)
    goldcoin = models.IntegerField(default=0)

    likes = models.ManyToManyField(User, blank=True, related_name='user_like')
    dislikes = models.ManyToManyField(User, blank=True, related_name='user_dislike')

    def __str__(self):
        return self.user.username

    def banner(self):
        if self.banner_img:
            r = requests.get(f'{URL_MEDIA}/{self.banner_img}')
            if r.status_code == 200:
                return f"{URL_MEDIA}/{self.banner_img}"
            self.banner_img = None
            self.save()
        return f"{URL_FRONTEND}/static/images/user/default_banner.png"

    def avatar(self):
        if self.avatar_img:
            r = requests.get(f'{URL_MEDIA}/{self.avatar_img}')
            if r.status_code == 200:
                return f"{URL_MEDIA}/{self.avatar_img}"
            self.avatar_img = None
            self.save()
        return f"{URL_FRONTEND}/static/images/user/default_avatar.png"
    
    def api_rank(self):
        pass

    class Meta:
        permissions = (
            ("status_staff", "Status Staff"),
            
            ("status_sponsor", "Status Sponsor"),
            ("status_donator", "Status Donator"),
            ("status_partner", "Status Partner"),
        )
