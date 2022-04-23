from django.db import models

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
    name = models.CharField(max_length=128)
    duration = CustomDurationField(default='')
    releaseDate = models.DateField(null=True)
    audioFile = models.TextField(null=False)
    # Add prices and type
