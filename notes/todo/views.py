from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from .models import Project
from .models import Todo
from .serializers import ProjectModelSerializer
from .serializers import TodoModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer

