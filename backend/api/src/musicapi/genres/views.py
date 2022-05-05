from rest_framework import viewsets
from rest_framework import permissions
from .serializers import GenreSerializer
from .models import Genre
from django.shortcuts import redirect

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = []
    # permission_classes = (permissions.IsAuthenticated, )