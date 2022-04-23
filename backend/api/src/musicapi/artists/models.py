from django.db import models
import uuid

class Artist(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128, blank=True, default='')
    nationality = models.CharField(max_length=64)