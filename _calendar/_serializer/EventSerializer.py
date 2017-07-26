from django.contrib.auth import update_session_auth_hash
from rest_framework.serializers import ModelSerializer
from rest_framework.utils import model_meta
from rest_framework.compat import set_many
from _calendar.models import Event


class EventSerializer( ModelSerializer ):
	def update(self, instance, validated_data):
		print("==========  CALLED UPDATE! ===========")
		print(str(validated_data))
		print(str(instance.id))
		fields = ModelSerializer.get_fields(self)
		info = model_meta.get_field_info(instance)
		for attr, value in validated_data.items():
			if attr in info.relations and info.relations[attr].to_many:
				print("setting multiple " + str(instance) + " " + str(attr) + " " + str(value))
				set_many(instance, attr, value)
			else:
				print("setting single " + str(instance) + " " + str(attr) + " " + str(value))
				setattr(instance, attr, value)
		instance.save()
		print(fields)
		return ModelSerializer.update(self, instance, validated_data)
	class Meta:
		model = Event
		fields = ( 'id', 'name', 'date', 'start_time', 'end_time',
			  'room', 'users', 'lead', 'category',
			  'event_group', )
		#read_only_fields = ( 'created_at', 'updated_at', )
	
	#def create( self, validated_data ):
	#	print(validated_data)
	#	event_id = validated_data.id
	#	event = Event.objects.get(id=event_id)
	#	print ("Created EVENT " + str(event_id))
	#	return Event.objects.create( **validated_data )

	#def update( self, instance, validated_data ):
	#	event = Event.objects.get(event_id)
	##	print ("FOUND EVENT " + str(event))
	#	instance.name = validated_data.get( 'name' )
	#	print(" name " + str(instance.name))
	#date
	#start_time =
	#end_time 
	#room 
	#users 
	#lead
	#category 
	#event_group 


		#instance.save()

		#update_session_auth_hash( self.context.get( 'request' ), instance )

		#return instance
