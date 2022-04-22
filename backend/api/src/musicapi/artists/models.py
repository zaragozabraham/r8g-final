from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128, blank=True, default='')
    nationality = models.CharField(max_length=64)