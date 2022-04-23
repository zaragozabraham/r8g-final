from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ArtistSerializer
from .models import Artist
from django.shortcuts import redirect

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all().order_by('name')
    serializer_class = ArtistSerializer
    permission_classes = []