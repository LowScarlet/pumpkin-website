import math
from datetime import datetime

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

# Leveling Map
def levelmap():
    return [(x*10)**2 for x in range(25)]

# Models
class Discord_Member(models.Model):
    # One To One Field
    user = models.OneToOneField(User, null=True, blank=True, related_name="discord_member", on_delete=models.SET_NULL)
    
    # Basic
    member_id = models.BigIntegerField(blank=True, null=True, unique=True)
    displayname = models.CharField(blank=True, null=True, max_length=250)
    join_datetime = models.DateTimeField(default=datetime.now, blank=True)

    # Leveling
    level_raw = models.IntegerField(default=0)
    exp = models.FloatField(default=0)

    # Coin
    discordcoin = models.IntegerField(default=0)

    # Afk
    afk = models.BooleanField(default=False)
    afk_reason = models.TextField(blank=True, null=True)
    
    # Daily
    daily = models.DateTimeField(default=datetime.now, blank=True)
    daily_day = models.IntegerField(default=0)
    
    # Default Method
    def __str__(self):
        if self.displayname:
            return f"{self.displayname} {self.member_id}"
        return f"{self.member_id}"
    
    # Get Level of Discord Member
    def level(self):
        v = 0
        for x in levelmap():
            if self.exp >= x: v = x
        return levelmap().index(v)
    
    # Get Total Exp to Levelup
    def levelup_exp_needed(self):
        return levelmap()[self.level()+1]-self.exp
    
    # Get Progress to levelup by percent
    # def levelup_progress_percent(self):
    #     return math.floor(self.exp/levelmap[self.level()+1]*100)

    
class Discord_VoiceChannel(models.Model):
    # One to One Field
    member = models.OneToOneField(Discord_Member, null=True, blank=True, related_name="member", on_delete=models.CASCADE)
    
    # Basic 
    channel_id = models.BigIntegerField(blank=True, null=True)
    last_active = models.DateTimeField(blank=True, null=True)
    modified = models.DateTimeField(blank=True, null=True)

    # Optional
    request_to_join = models.BooleanField(default=False)
    guild_only = models.BooleanField(default=False)
    party_only = models.BooleanField(default=False)

    # Default Method
    def save(self, *args, **kwargs):
        if not self.id:
            self.last_active = timezone.now()
        self.modified = timezone.now()
        return super(Discord_VoiceChannel, self).save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.owner.member_id}"