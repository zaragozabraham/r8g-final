# Generated by Django 4.0.3 on 2022-04-24 00:05

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import musicapi.songs.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('albums', '0001_initial'),
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('duration', musicapi.songs.models.CustomDurationField(default='')),
                ('releaseDate', models.DateField(null=True)),
                ('audioFile', models.TextField()),
                ('digitalPrice', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0), django.core.validators.MaxValueValidator(2000.0)])),
                ('album', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='songsAlbum', to='albums.album')),
                ('artists', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='songArtists', to='artists.artist')),
            ],
        ),
    ]
