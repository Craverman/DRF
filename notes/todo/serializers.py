from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Project
from .models import Todo


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = ['name', 'repo', 'owner']


class TodoModelSerializer(ModelSerializer):

    class Meta:
        model = Todo
        fields = ['author', 'projectname', 'text', 'created_at', 'updated_at']
