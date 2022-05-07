from rest_framework import serializers
from .models import *

class ArtistSerializer(serializers.ModelSerializer):
    albumArtists = serializers.StringRelatedField(many=True, read_only=True)
    songArtists = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Artist
        fields = ['id', 'name', 'last_name', 'nationality', 'image', 'albumArtists', 'songArtists']
        depth = 1