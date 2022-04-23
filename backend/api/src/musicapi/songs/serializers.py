from rest_framework import serializers
from .models import *

class SongSerializer(serializers.ModelSerializer):
    albumSongs = serializers.StringRelatedField(many=True, read_only=True)
    userSongs = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Song
        fields = ['id', 'name', 'duration', 'releaseDate', 'audioFile', 'albumSongs', 'userSongs']