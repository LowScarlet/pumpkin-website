# Generated by Django 4.1 on 2022-10-21 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_remove_discord_account_avatar_img_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='email_confirmation',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]