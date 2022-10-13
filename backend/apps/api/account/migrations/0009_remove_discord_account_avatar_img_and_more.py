# Generated by Django 4.1 on 2022-10-13 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_remove_discord_account_token_exp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='discord_account',
            name='avatar_img',
        ),
        migrations.AddField(
            model_name='discord_account',
            name='avatar_code',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
    ]
