from rest_framework import viewsets
from rest_framework import permissions
from .serializers import SongSerializer
from .models import Song
from django.shortcuts import redirect

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all().order_by('id')
    serializer_class = SongSerializer
    permissions_classes = []