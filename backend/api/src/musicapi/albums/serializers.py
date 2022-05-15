from rest_framework import serializers
from .models import *
from musicapi.genres.serializers import GenreSerializer
from musicapi.artists.serializers import ArtistSerializer
from musicapi.genres.models import Genre
from musicapi.artists.models import Artist
import json

class AlbumSerializer(serializers.ModelSerializer):
    # songsAlbum = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Album
        fields = [
            'id',
            'name', 
            'releaseDate',
            'single',
            'physicalStock',
            'physicalPrice', 
            'digitalPrice', 
            'image',
            'genres',
            'artists',
            'songsAlbum',
            'ownedAlbumsID',
            'orderAlbumID'
            ]
        extra_kwargs = {
            'ownedAlbumsID': {'required': False},
            'orderAlbumID': {'required': False},
        }
        depth = 1