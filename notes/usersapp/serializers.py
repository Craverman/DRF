from rest_framework import serializers
from .models import User


class UserModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']


class UserModelSerializerNew(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
