# Generated by Django 4.1 on 2022-10-02 05:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_discord_account_access_discord_account_active_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='discord_account',
            name='token_exp',
        ),
    ]
