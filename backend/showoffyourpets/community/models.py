from django.db import models

# Create your models here.
class User(models.Model):
  user_name = models.CharField(max_length=200)
  user_id = models.CharField(max_length=200)
  user_pw = models.CharField(max_length=200)

class Post(models.Model):
  id = models.BigAutoField(help_text="Post ID", primary_key=True)
  contents = models.TextField()
  photo = models.ImageField(blank=True, null=True)
  user_name = models.CharField(max_length=200, default = '')
  likes = models.ManyToManyField(User,blank=True)

class Comment(models.Model):
  id = models.BigAutoField(help_text="Comment ID", primary_key=True)
  comment = models.TextField()
  user_name = models.CharField(max_length=200, default = '')
  post_id = models.ForeignKey(Post,on_delete=models.CASCADE, db_column="post_id",default='')
  

class FosterPost(models.Model):
  title = models.CharField(max_length=1000)
  contents = models.TextField()
  photo = models.ImageField(blank=True, null=True)
  user_name = models.CharField(max_length=200, default = '')

class FosterComment(models.Model):
  comment = models.TextField()
  user_name = models.CharField(max_length=200, default = '')
