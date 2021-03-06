from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework import mixins, viewsets
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelSerializerNew


# class UserModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer

class CustomUserModelViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin,
                             mixins.RetrieveModelMixin, viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserModelSerializerNew
        return UserModelSerializer
