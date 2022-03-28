from datetime import datetime
from datetime import date

from django.db import models
from usersapp.models import User


class Project(models.Model):
    owner = models.ManyToManyField(User)
    name = models.CharField(max_length=64)
    repo = models.URLField(max_length=64)


class Todo(models.Model):
    author = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    projectname = models.ForeignKey(Project, related_name='notes', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)


