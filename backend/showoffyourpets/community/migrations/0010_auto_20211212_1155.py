# Generated by Django 3.2.9 on 2021-12-12 11:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0009_auto_20211212_0557'),
    ]

    operations = [
        migrations.DeleteModel(
            name='FosterComment',
        ),
        migrations.DeleteModel(
            name='FosterPost',
        ),
    ]
