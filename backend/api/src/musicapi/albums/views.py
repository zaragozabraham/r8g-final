from rest_framework import viewsets
from rest_framework import permissions
from .serializers import AlbumSerializer
from .models import Album
from django.shortcuts import redirect
from musicapi.genres.models import Genre
from musicapi.artists.models import Artist
from rest_framework.response import Response

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('name')
    serializer_class = AlbumSerializer
    permissions_classes = []

    def create(self, request, *args, **kwargs):
        gen = request.data.pop('genres')
        art = request.data.pop('artists')
        alb = request.data

        genre = None
        artist = None

        if gen.get('id') is not None:
            genre = Genre.objects.get(id=gen['id'])
        else:
            genre = Genre.objects.create(
                name = gen['id']
            )
            genre.save()
        
        if art.get('id') is not None:
            artist = Artist.objects.get(id=art['id'])
        else:
            artist = Artist.objects.create(
                name = art['name'],
                last_name = art['last_name'],
                nationality = art['nationality'],
                image = art['image']
            )
            artist.save()
        
        album = Album.objects.create(
            name = alb['name'],
            releaseDate = alb['releaseDate'],
            single = alb['single'],
            physicalStock = alb['physicalStock'],
            physicalPrice = alb['physicalPrice'],
            digitalPrice = alb['digitalPrice'],
            image = alb['image'],
            genres = genre,
            artists = artist
        )
        album.save()

        serializer = AlbumSerializer(album)

        return Response(serializer.data)