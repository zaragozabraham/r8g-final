from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
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
    # genres = models.ForeignKey(Genre, related_name='albumGenres', on_delete=models.CASCADE)
    # artists
    # songs
