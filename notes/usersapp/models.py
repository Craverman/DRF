from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'
