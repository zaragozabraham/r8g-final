from rest_framework import viewsets
from rest_framework import permissions
from .serializers import GenreSerializer
from .models import Genre
from django.shortcuts import redirect

class IsAdminOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        email = request.data['email']
        user = User.objects.filter(email=email).first()
        # Write permissions are only allowed to the admin.
        return user.mode == 2

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # permission_classes = (permissions.IsAuthenticated, )