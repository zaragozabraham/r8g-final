from django.contrib.auth.models import AbstractUser
from django.db import models
from musicapi.albums.models import Album
from musicapi.songs.models import Song
import uuid


class User(AbstractUser):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	email = models.CharField(max_length=255, unique=True)
	username = models.CharField(max_length=255, unique=True)
	# ownedAlbums = models.ForeignKey(Album, related_name='userAlbums', on_delete=models.CASCADE, blank=True, null=True)

	class Mode(models.IntegerChoices):
		CUSTOMER = 1
		ADMIN = 2

	mode = models.IntegerField(choices = Mode.choices, default = 1)
	def __str__(self):
		return f'{self.username}'

class Address(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	user = models.ForeignKey(User, related_name='addresses', on_delete=models.CASCADE)
	phone = models.CharField(max_length=10) # Without prefix {+1, +51, etc}
	addres_line = models.CharField(max_length=255)
	addres_line2 = models.CharField(max_length=255)
	city = models.CharField(max_length=128)
	state = models.CharField(max_length=128)
	COUNTRY_CHOICES = [
		('US', 'United States'),
		('MX', 'Mexico'),
		('CA', 'Canada'),
	]
	country = models.CharField(max_length=2, choices=COUNTRY_CHOICES, default='US')
	zipCode = models.CharField(max_length=32)
	default = models.BooleanField(default=False)
	
	def __str__(self):
		return f'{self.addres_line}'

class OwnedSongs(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	user = models.ForeignKey(User, related_name='ownedSongsUser', on_delete=models.CASCADE)

class OwnedAlbums(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	user = models.ForeignKey(User, related_name='ownedAlbumsUser', on_delete=models.CASCADE)

class AlbumOwned(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	ownedAlbumsID = models.ForeignKey(OwnedAlbums, related_name='ownedAlbums', on_delete=models.CASCADE)
	albumID = models.ForeignKey(Album, related_name='ownedAlbumsID', on_delete=models.CASCADE)

class Playlist(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=128)
	user = models.ForeignKey(User, related_name='userPlaylist', on_delete=models.CASCADE)
	def __str__(self):
		return f'{self.name}'

class SongOwned(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	ownedID = models.ForeignKey(OwnedSongs, related_name='ownedListID', on_delete=models.CASCADE)
	songID = models.ForeignKey(Song, related_name='ownedSongID', on_delete=models.CASCADE)

class SongPlaylist(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	playlistID = models.ForeignKey(Playlist, related_name='playlistID', on_delete=models.CASCADE)
	songID = models.ForeignKey(Song, related_name='playlistSongID', on_delete=models.CASCADE)

class Order(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	user = models.ForeignKey(User, related_name='userOrders', on_delete=models.CASCADE)

class OrderAlbum(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	userOrderID = models.ForeignKey(Order, related_name='orderAlbums', on_delete=models.CASCADE)
	albumID = models.ForeignKey(Album, related_name='orderAlbumID', on_delete=models.CASCADE)

class OrderSong(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	userOrderID = models.ForeignKey(Order, related_name='orderSongs', on_delete=models.CASCADE)
	songID = models.ForeignKey(Song, related_name='orderSongID', on_delete=models.CASCADE)