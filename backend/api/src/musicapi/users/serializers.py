from django.contrib.auth.models import Group
from musicapi.users.models import *


from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken, TokenError
from django.utils.text import gettext_lazy as _

class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    # access = serializers.CharField()

    default_error_messages = {
        'bad_token': _('Token is invalid or expired')
    }

    def validate(self, attrs):
        self.refresh_token = attrs['refresh']
        # self.access_token = attrs['access']
        return attrs

    def save(self, **kwargs):
        try:
            # AccessToken(self.access_token).blacklist()
            RefreshToken(self.refresh_token).blacklist()
        except TokenError:
            self.fail('bad_token')

class UserSerializer(serializers.ModelSerializer):
    def validate_password(self, value: str) -> str:
        return make_password(value)
    
    addresses = serializers.StringRelatedField(many=True, read_only=True)
    ownedAlbumsUser = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'mode', 'is_staff', 'addresses', 'ownedSongsUser', 'userPlaylist', 'ownedAlbumsUser', 'userOrders', 'groups']
         # Changes password to write only, user never be able to access it
        extra_kwargs = {
            'email': {'required': True},
            'password': {'write_only': True},
            'is_staff': {'required': False},
            'ownedSongsUser': {'required': False},
            'userPlaylist': {'required': False},
            'ownedAlbumsUser': {'required': False},
            'userOrders': {'required': False},
        }
        depth = 1


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            'id',
            'user',
            'phone',
            'addres_line',
            'addres_line2',
            'city',
            'state',
            'country',
            'zipCode',
            'default',
            ]

class OwnedSongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnedSongs
        fields = ['id', 'user', 'ownedListID']
        extra_kwargs = {
            'ownedListID': {'required': False},
        }

class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ['id', 'name', 'user', 'playlistID']
        extra_kwargs = {
            'playlistID': {'required': False},
        }

class SongOwnedSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongOwned
        fields = ['id', 'ownedID', 'songID']

class SongPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongPlaylist
        fields = ['id', 'playlistID', 'songID']

class OwnedAlbumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnedAlbums
        fields = ['id', 'user', 'ownedAlbums']
        extra_kwargs = {
            'ownedAlbums': {'required': False},
        }

class AlbumOwnedSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumOwned
        fields = ['id', 'ownedAlbumsID', 'albumID']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'orderAlbums', 'orderSongs']
        extra_kwargs = {
            'orderAlbums': {'required': False},
            'orderSongs': {'required': False},
        }

class OrderAlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderAlbum
        fields = ['id', 'userOrderID', 'albumID']

class OrderSongSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderSong
        fields = ['id', 'userOrderID', 'songID']