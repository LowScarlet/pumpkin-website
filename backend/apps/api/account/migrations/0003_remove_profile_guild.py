# Generated by Django 4.1 on 2022-09-06 19:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_profile_guild'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='guild',
        ),
    ]