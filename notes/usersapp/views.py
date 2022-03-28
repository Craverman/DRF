from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
