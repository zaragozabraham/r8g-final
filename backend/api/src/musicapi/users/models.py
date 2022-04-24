from django.contrib.auth.models import AbstractUser
from django.db import models
from musicapi.albums.models import Album
from musicapi.songs.models import Song
import uuid


class User(AbstractUser):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	email = models.CharField(max_length=255, unique=True)
	username = models.CharField(max_length=255, unique=True)
	ownedAlbums = models.ForeignKey(Album, related_name='userAlbums', on_delete=models.CASCADE, blank=True, null=True)
	ownedSongs = models.ForeignKey(Song, related_name='userSongs', on_delete=models.CASCADE, blank=True, null=True)

	class Type(models.IntegerChoices):
		CUSTOMER = 1
		ADMIN = 2

	type = models.IntegerField(choices = Type.choices, default = 1)
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