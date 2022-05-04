from rest_framework import serializers
from .models import *

class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ['id', 'name', 'duration', 'releaseDate', 'audioFile', 'digitalPrice', 'artists', 'album', 'ownedSongID', 'playlistSongID']
        extra_kwargs = {
            'ownedSongID':{'required': False},
            'playlistSongID':{'required': False}
            }