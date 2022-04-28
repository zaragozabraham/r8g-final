from rest_framework import serializers
from .models import *

class SongSerializer(serializers.ModelSerializer):
    ownedSongsSongs = serializers.StringRelatedField(many=True, read_only=True)
    songsPlaylist = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Song
        fields = ['id', 'name', 'duration', 'releaseDate', 'audioFile', 'digitalPrice', 'artists', 'album', 'ownedSongsSongs', 'songsPlaylist']
        extra_kwargs = {
            'ownedSongsSongs':{'required': False},
            'songsPlaylist':{'required': False}
            }