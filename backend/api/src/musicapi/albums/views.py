from rest_framework import viewsets
from rest_framework import permissions
from .serializers import AlbumSerializer
from .models import Album
from django.shortcuts import redirect

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('name')
    serializer_class = AlbumSerializer
    permissions_classes = []