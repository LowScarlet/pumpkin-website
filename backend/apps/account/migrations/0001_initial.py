# Generated by Django 4.1 on 2022-09-04 20:51

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
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female')], default='male', max_length=12)),
                ('rank', models.CharField(blank=True, choices=[('wooden', 'Wooden'), ('stone', 'Stone'), ('iron', 'Iron'), ('gold', 'Gold')], default='wooden', max_length=12)),
                ('bio', models.TextField(blank=True, max_length=500, null=True)),
                ('country', models.CharField(blank=True, default='Indonesia', max_length=30)),
                ('city', models.CharField(blank=True, default='Jakarta', max_length=30)),
                ('banner_img', models.ImageField(blank=True, null=True, upload_to='user/banner')),
                ('avatar_img', models.ImageField(blank=True, null=True, upload_to='user')),
                ('pumpkincoin', models.IntegerField(default=0)),
                ('silvercoin', models.IntegerField(default=0)),
                ('goldcoin', models.IntegerField(default=0)),
                ('dislikes', models.ManyToManyField(blank=True, related_name='user_dislike', to=settings.AUTH_USER_MODEL)),
                ('likes', models.ManyToManyField(blank=True, related_name='user_like', to=settings.AUTH_USER_MODEL)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'permissions': (('status_staff', 'Status Staff'), ('status_sponsor', 'Status Sponsor'), ('status_donator', 'Status Donator'), ('status_partner', 'Status Partner')),
            },
        ),
    ]
