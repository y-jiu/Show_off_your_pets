from django.db import models

# Create your models here.
class User(models.Model):
  user_name = models.CharField(max_length=200)
  user_id = models.CharField(max_length=200)
  user_pw = models.CharField(max_length=200)

class Post(models.Model):
  # title = models.CharField(max_length=1000)
  contents = models.TextField()
  photo = models.ImageField(blank=True, null=True)
  user_name = models.CharField(max_length=200, default = '')

class Comment(models.Model):
  comment = models.TextField()
  user_name = models.CharField(max_length=200, default = '')

class FosterPost(models.Model):
  title = models.CharField(max_length=1000)
  contents = models.TextField()
  photo = models.ImageField(blank=True, null=True)
  user_name = models.CharField(max_length=200, default = '')

class FosterComment(models.Model):
  comment = models.TextField()
  user_name = models.CharField(max_length=200, default = '')
