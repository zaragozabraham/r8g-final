from rest_framework import serializers
from .models import *

class AlbumSerializer(serializers.ModelSerializer):
    # userAlbums = serializers.StringRelatedField(many=True, read_only=True)
    songsAlbum = serializers.StringRelatedField(many=True, read_only=True)
    # albumGenres = serializers.StringRelatedField(many=True, read_only=True)
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
            'songsAlbum'
            ]