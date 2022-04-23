from rest_framework import serializers
from .models import *

class AlbumSerializer(serializers.ModelSerializer):
    # albumGenres = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Album
        fields = [
            'id',
            'name', 
            'releaseDate', 
            'physicalStock',
            'physicalPrice', 
            'digitalPrice', 
            'image'
            ]