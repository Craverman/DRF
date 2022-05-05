import json
from django.test import TestCase

from rest_framework import status

from rest_framework.test import APIRequestFactory, APITestCase,APIClient

from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import CustomUserModelViewSet
from .models import User
from todo.models import Project, Todo


class TestCustomUserModelViewSet(TestCase):

    # APIRequestFactory

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/usersapp/')
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/usersapp/', {'first_name': 'Vladislav', 'last_name': 'Vladislavov',
                                                  'username': 'Craver'}, format='json')
        view = CustomUserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # ApiClient

    def test_get_detail(self):
        user = User.objects.create(username='Craverok', email='somemail@maul.ru')
        client = APIClient()
        response = client.get(f'/api/usersapp/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        user = User.objects.create(username='Craverok', email='somemail@maul.ru')
        client = APIClient()
        response = client.put(f'/api/usersapp/{user.id}/', {'last_name': 'Seoondname',
                                                            'first_name': 'name'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # APITestCase


class TestProjectViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/project/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # Mixer

    def test_get_detail(self):
        project = mixer.blend(Project, name='Very Important Project')
        response = self.client.get(f'/api/project/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_project = json.loads(response.content)
        self.assertEqual(response_project['name'], 'Very Important Project')