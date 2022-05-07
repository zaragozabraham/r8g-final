from rest_framework import serializers
from .models import *

class GenreSerializer(serializers.ModelSerializer):
    albumGenres = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Genre
        fields = ['id', 'name','albumGenres']
        depth = 1