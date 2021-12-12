from .models import Comment, User, Post
from rest_framework import serializers, viewsets

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CommentSerializer(serializers.ModelSerializer):
  class Meta:
      model = Comment
      fields = '__all__'

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class PostSerializer(serializers.ModelSerializer):
  post = CommentSerializer(many=True, read_only=True)
  class Meta:
      model = Post
      fields = '__all__'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
