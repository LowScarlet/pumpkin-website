# Generated by Django 4.1 on 2022-09-25 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_profile_email_confirmation_discord_account'),
    ]

    operations = [
        migrations.AddField(
            model_name='discord_account',
            name='discordcoin',
            field=models.IntegerField(default=0),
        ),
    ]
