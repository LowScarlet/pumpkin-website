from datetime import datetime
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

# Discord Leveling Map
def levelmap():
    return [(x*10)**2 for x in range(25)]

# Profile Model
class Profile(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, related_name="profile", on_delete=models.CASCADE)

    # Basic
    email_confirmation = models.BooleanField(blank=True, default=False)
    views = models.IntegerField(default=0)
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

# Discord Account Model
class Discord_Account(models.Model):
    user = models.OneToOneField(
        User, null=True, blank=True, related_name="discord_account", on_delete=models.CASCADE)
    whitelist_datetime = models.DateTimeField(default=datetime.now, blank=True)
    active = models.BooleanField(default=False)

    # Secret
    access = models.CharField(max_length=64, null=True, blank=True)
    refresh = models.CharField(max_length=64, null=True, blank=True)
    # token_exp = models.DateTimeField(null=True, blank=True)

    # Basic
    nickname = models.CharField(max_length=64)
    uid = models.CharField(max_length=32, unique=True)

    # Media
    avatar_code = models.CharField(max_length=64, null=True, blank=True)

    # Leveling System
    raw_level= models.IntegerField(default=0)
    exp = models.IntegerField(default=0)

    # Economy
    discordcoin = models.IntegerField(default=0)
    
    # Daily
    daily = models.DateTimeField(default=datetime.now, blank=True)
    daily_day = models.IntegerField(default=0)

    # Magic Method
    def __str__(self):
        if self.nickname:
            return f"{self.nickname} ({self.uid})"
        return f"{self.uid}"

    # Custom Method *Get Avatar URL
    def avatar(self):
        if self.avatar_code:
            r = requests.get(f'https://cdn.discordapp.com/avatars/{self.uid}/{self.avatar_code}')
            # print(f'https://cdn.discordapp.com/avatars/{self.uid}/{self.avatar_code}')
            if r.status_code == 200:
                return f"https://cdn.discordapp.com/avatars/{self.uid}/{self.avatar_code}"
            self.avatar_img = None
            self.save()
        return f"{settings.FRONTEND_URL}/static/images/user/default_avatar_discord.png"
    
    # Get Level of Discord Member
    def level(self):
        v = 0
        for x in levelmap():
            if self.exp >= x: v = x
        return levelmap().index(v)
    
    # Get Total Exp to Levelup
    def levelup_exp_needed(self):
        return levelmap()[self.level()+1]-self.exp
    
    # Is Level max
    def is_level_max(self):
        return True
