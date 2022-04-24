from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from musicapi.genres.models import Genre
from musicapi.artists.models import Artist
import uuid

class Album(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    releaseDate = models.DateField()
    single = models.BooleanField(null=False, default=False)
    physicalStock = models.PositiveSmallIntegerField(blank=True, default=200)
    physicalPrice = models.FloatField(null=False, validators=[MinValueValidator(0.0), MaxValueValidator(2000.0)])
    digitalPrice = models.FloatField(null=False, validators=[MinValueValidator(0.0), MaxValueValidator(2000.0)])
    image = models.TextField(null=False)
    genres = models.ForeignKey(Genre, related_name='albumGenres', on_delete=models.CASCADE)
    artists = models.ForeignKey(Artist, related_name='albumArtists', on_delete=models.CASCADE)
    # Change to ManyToMany { genres, artists }
    def __str__(self):
        return f'{self.name}'

    # Example of M2M intermediate table
    # class Person(models.Model):
    #     name = models.CharField(max_length=50)
    # class Group(models.Model):
    #     name = models.CharField(max_length=128)
    #     members = models.ManyToManyField(
    #         Person,
    #         through='Membership',
    #         through_fields=('group', 'person'),
    #     )

    # class Membership(models.Model):
    #     group = models.ForeignKey(Group, on_delete=models.CASCADE)
    #     person = models.ForeignKey(Person, on_delete=models.CASCADE)
    #     inviter = models.ForeignKey(
    #         Person,
    #         on_delete=models.CASCADE,
    #         related_name="membership_invites",
    #     )
    #     invite_reason = models.CharField(max_length=64)