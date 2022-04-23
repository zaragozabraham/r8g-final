from django.db import models
from musicapi.artists.models import Artist
from django.core.validators import MaxValueValidator, MinValueValidator
import uuid

def duration_string(duration):
    days = duration.days
    seconds = duration.seconds

    minutes = seconds // 60

    hours = minutes // 60
    minutes = minutes % 60

    dur_string = f'{hours}:{minutes}:00'
    if days:
        dur_string = 'f{days} + dur_string'
    return dur_string

class CustomDurationField(models.DurationField):
    def prepare_value(self, value):
        if isinstance(value, datetime.timedelta):
            return duration_string(value)
        return value

class Song(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    duration = CustomDurationField(default='')
    releaseDate = models.DateField(null=True)
    audioFile = models.TextField(null=False)
    artists = models.ForeignKey(Artist, related_name='songArtists', on_delete=models.CASCADE)
    digitalPrice = models.FloatField(null=False, validators=[MinValueValidator(0.0), MaxValueValidator(2000.0)])
    # Add prices and type
