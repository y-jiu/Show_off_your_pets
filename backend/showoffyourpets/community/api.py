from .models import Comment, User, Post, FosterComment, FosterPost
from rest_framework import serializers, viewsets

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostSerializer(serializers.ModelSerializer):
  class Meta:
      model = Post
      fields = '__all__'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
      model = Comment
      fields = '__all__'

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class FosterPostSerializer(serializers.ModelSerializer):
  class Meta:
      model = FosterPost
      fields = '__all__'

class FosterPostViewSet(viewsets.ModelViewSet):
    queryset = FosterPost.objects.all()
    serializer_class = FosterPostSerializer

class FosterCommentSerializer(serializers.ModelSerializer):
  class Meta:
      model = FosterComment
      fields = '__all__'

class FosterCommentViewSet(viewsets.ModelViewSet):
    queryset = FosterComment.objects.all()
    serializer_class = FosterCommentSerializer