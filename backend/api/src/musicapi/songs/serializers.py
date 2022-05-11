from rest_framework import serializers
from .models import *
from musicapi.artists.serializers import ArtistSerializer
from musicapi.albums.serializers import AlbumSerializer

class SongSerializer(serializers.ModelSerializer):
    # artists = ArtistSerializer(many=True, read_only=True)
    # album = AlbumSerializer(many=True, read_only=True)
    class Meta:
        model = Song
        fields = ['id', 'name', 'duration', 'releaseDate', 'audioFile', 'digitalPrice', 'artists', 'album', 'ownedSongID', 'playlistSongID', 'orderSongID']
        extra_kwargs = {
            'ownedSongID':{'required': False},
            'playlistSongID':{'required': False},
            'orderSongID':{'required': False}
            }
        # depth = 1