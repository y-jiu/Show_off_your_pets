# Generated by Django 3.2.9 on 2021-12-08 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0002_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
            ],
        ),
    ]
