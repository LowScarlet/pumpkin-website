# Generated by Django 4.1 on 2022-08-18 11:16

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Discord_Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_id', models.BigIntegerField(blank=True, null=True, unique=True)),
                ('displayname', models.CharField(blank=True, max_length=250, null=True)),
                ('join_datetime', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('level_raw', models.IntegerField(default=0)),
                ('exp', models.FloatField(default=0)),
                ('discordcoin', models.IntegerField(default=0)),
                ('afk', models.BooleanField(default=False)),
                ('afk_reason', models.TextField(blank=True, null=True)),
                ('daily', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('daily_day', models.IntegerField(default=0)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='discord_member', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Voicechat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('channel_id', models.BigIntegerField(blank=True, null=True)),
                ('last_active', models.DateTimeField(blank=True, null=True)),
                ('modified', models.DateTimeField(blank=True, null=True)),
                ('request_to_join', models.BooleanField(default=False)),
                ('guild_only', models.BooleanField(default=False)),
                ('party_only', models.BooleanField(default=False)),
                ('member', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='member', to='discord.discord_member')),
            ],
        ),
    ]
