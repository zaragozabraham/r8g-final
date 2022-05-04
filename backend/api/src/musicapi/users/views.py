from django.contrib.auth.models import Group
from musicapi.users.models import User, Address, OwnedSongs, Playlist, SongOwned, SongPlaylist

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import permissions
from musicapi.users.serializers import UserSerializer, RefreshTokenSerializer, GroupSerializer, AddressSerializer, OwnedSongsSerializer, PlaylistSerializer, SongOwnedSerializer, SongPlaylistSerializer
from rest_framework.response import Response
from rest_framework import status

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = []
    # permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, pk=None):
        user_queryset = User.objects.filter(id = pk)
        serializer = UserSerializer(user_queryset)
        return Response(serializer.data)

class AdressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all().order_by('id')
    serializer_class = AddressSerializer
    permission_classes = []

class OwnedSongsViewSet(viewsets.ModelViewSet):
    queryset = OwnedSongs.objects.all().order_by('id')
    serializer_class = OwnedSongsSerializer
    permission_classes = []

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
    permission_classes = []

class SongOwnedViewSet(viewsets.ModelViewSet):
    queryset = SongOwned.objects.all()
    serializer_class = SongOwnedSerializer
    permission_classes = []

class SongPlaylistViewSet(viewsets.ModelViewSet):
    queryset = SongPlaylist.objects.all()
    serializer_class = SongPlaylistSerializer
    permission_classes = []

    # def create(self, request, *args, **kwargs):
    #     req_data = request.data
    #     req_song = req_data['songs']
    #     owned = OwnedSongs.objects.filter(user=req_data['user'], songs=req_data['songs'])
    #     print(owned)
    #     if owned is None:
    #         raise_exception
    #     else:
    #         newSong = Playlist.objects.filter(user=req_data['user']).add()
        



class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('Email is not register yet!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        response = Response()

        response.data = {
            'id': user.id,
            'email': user.email,
            'type': user.type
        }
        return response

class LogoutView(GenericAPIView):
    serializer_class = RefreshTokenSerializer
    permission_classes = (permissions.IsAuthenticated, )
    
    def post(self, request, *args):
        sz = self.get_serializer(data=request.data)
        sz.is_valid(raise_exception=True)
        sz.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    #permission_classes = [permissions.IsAuthenticated]