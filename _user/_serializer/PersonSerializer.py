from django.contrib.auth import update_session_auth_hash
from rest_framework.serializers import ModelSerializer
from rest_framework.utils import model_meta
from rest_framework.compat import set_many
from _user.models import Person
from _user._serializer.UserSerializer import UserSerializer

class PersonSerializer( ModelSerializer ):
	user = UserSerializer()
	class Meta:
		model = Person
		fields = ( 'id', 'user', 'birthday', 'street', 'hnr', 'zip', 'city', 'country', 'phone', 'mobile', 'accessibility' )
