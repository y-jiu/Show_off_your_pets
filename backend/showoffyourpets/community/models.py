from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=200)
    user_id = models.CharField(max_length=200)
    user_pw = models.CharField(max_length=200)