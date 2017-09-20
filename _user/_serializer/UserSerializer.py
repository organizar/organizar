from django.contrib.auth import update_session_auth_hash
from rest_framework.serializers import ModelSerializer
from rest_framework.utils import model_meta
from rest_framework.compat import set_many
from django.contrib.auth.models import User


class UserSerializer( ModelSerializer ):
	class Meta:
		model = User
		fields = ( 'id', 'first_name', 'last_name', 'email', 'is_active', 'is_superuser', 'groups', 'user_permissions', 'last_login' )
