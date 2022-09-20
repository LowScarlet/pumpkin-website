import requests
from api.account.rank import RANK
from api.guild.models import Guild
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

# CHOICES *Gender
GENDER_CHOICES = (
    ('male', 'Male'),
    ('female', 'Female'),
)

# CHOICES *Rank
RANK_CHOICES = []
for x in RANK:
    RANK_CHOICES.append((x, RANK[x]["attribute"]["displayname"]))

# Profile Model


class Profile(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, related_name="profile", on_delete=models.CASCADE)

    # Basic
    gender = models.CharField(
        max_length=12, choices=GENDER_CHOICES, blank=True, default="male")
    rank = models.CharField(
        max_length=12, choices=RANK_CHOICES, blank=True, default="wooden")
    bio = models.TextField(max_length=500, blank=True, null=True)

    # Location
    country = models.CharField(max_length=30, blank=True, default="Indonesia")
    city = models.CharField(max_length=30, blank=True, default="Jakarta")

    # Media
    banner_img = models.ImageField(
        blank=True, null=True, upload_to="user/banner")
    avatar_img = models.ImageField(blank=True, null=True, upload_to="user")

    # Economy
    pumpkincoin = models.IntegerField(default=0)
    silvercoin = models.IntegerField(default=0)
    goldcoin = models.IntegerField(default=0)

    # Likes & Dislikes
    likes = models.ManyToManyField(User, blank=True, related_name='user_like')
    dislikes = models.ManyToManyField(
        User, blank=True, related_name='user_dislike')

    # Magic Method
    def __str__(self):
        return self.user.username

    # Custom Method *Get Banner URL
    def banner(self):
        if self.banner_img:
            r = requests.get(f'{settings.STATIC_URL}/{self.banner_img}')
            if r.status_code == 200:
                return f"{settings.STATIC_URL}/{self.banner_img}"
            self.banner_img = None
            self.save()
        return f"{settings.FRONTEND_URL}/static/images/user/default_banner.png"

    # Custom Method *Get Avatar URL
    def avatar(self):
        if self.avatar_img:
            r = requests.get(f'{settings.STATIC_URL}/{self.avatar_img}')
            if r.status_code == 200:
                return f"{settings.STATIC_URL}/{self.avatar_img}"
            self.avatar_img = None
            self.save()
        return f"{settings.FRONTEND_URL}/static/images/user/default_avatar.png"

    class Meta:
        # Custom Permission
        permissions = (
            ("status_staff", "Status Staff"),

            ("status_sponsor", "Status Sponsor"),
            ("status_donator", "Status Donator"),
            ("status_partner", "Status Partner"),
        )