from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
	email = models.CharField(max_length=255, unique=True)
	username = models.CharField(max_length=255, unique=True)

	class Type(models.IntegerChoices):
		CUSTOMER = 1
		ADMIN = 2

	type = models.IntegerField(choices = Type.choices, default = 1)

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