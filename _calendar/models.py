# coding=UTF-8

import datetime
import json

from django.contrib.auth.models import User
from django.db import models

from _billing.models import Contract
from _user.models import Person


class Topic( models.Model ):
	name = models.CharField( max_length = 200 )

	def __unicode__( self ):
		return self.name

	class Meta:
		verbose_name = "Thema"
		verbose_name_plural = "Themen"

class Room( models.Model ):
	name = models.CharField( max_length = 200 )

	def __unicode__( self ):
		return self.name

	class Meta:
		verbose_name = "Raum"
		verbose_name_plural = "Räume"

class Category( models.Model ):
	name = models.CharField( max_length = 200 )

	def __unicode__( self ):
		return self.name

	class Meta:
		verbose_name = "Fach"
		verbose_name_plural = "Fächer"

class Event_Group( models.Model ):
	name = models.CharField( "Name", max_length = 200 )
	start_date = models.DateTimeField( "Beginn", default = datetime.date.today, blank = True, null = True )
	end_date = models.DateTimeField( "Ende", default = datetime.date.today, blank = True, null = True )

	def __unicode__( self ):
		return self.name

	class Meta:
		verbose_name = "Stundeserie"
		verbose_name_plural = "Stundeserien"

class Event( models.Model ):
	name = models.CharField( "Name", max_length = 200, blank = True, null = True )
	#comment = models.CharField( "Comment", max_length = 500, blank = True, null = True )
	date = models.DateTimeField( "Tag", default = datetime.date.today )
	start_time = models.DateTimeField( "Beginn", default = datetime.date.today, blank = True, null = True )
	end_time = models.DateTimeField( "Ende", default = datetime.date.today, blank = True, null = True )
	room = models.ForeignKey( Room, blank = True, null = True )
	users = models.ManyToManyField( User, blank = True, null = True, related_name = 'user_participants' )
	lead = models.ForeignKey( User, blank = True, null = True, related_name = 'user_lead' )
	# pos_x = models.IntegerField("X Koordinate", blank=True, null=True)
	# pos_y = models.IntegerField("Y Koordinate", blank=True, null=True)
	category = models.ForeignKey( Category, blank = True, null = True )
	# classes = models.CharField("CSS Klassen", max_length=200, blank=True, null=True)
	event_group = models.ForeignKey( Event_Group, blank = True, null = True, related_name = 'event_group' )

	def get_user( self ):
		print ( "YES" )

	def __unicode__( self ):
		return self.name

	def __eq__( self, event ):
		if not isinstance( event, Event ):
			return False
		if self.id != event.id:
			return False
		return True
	
	def get_comments( self ):
		users_comments = Event_Person_Comment.objects.filter( event = self )
		if users_comments == None:		
			return None

		return users_comments
	
	def get_not_at_event( self ):
		not_at_event = Not_At_Event_Person.objects.filter( event = self )
		if not_at_event == None:

			return None

		return not_at_event

	def get_print_hours( self ):
		data = {}
		data["not_at_event"] = self.get_not_at_event()
		data["comments"] = self.get_comment()

		return data

	class Meta:
		verbose_name = "Stunde"
		verbose_name_plural = "Stunden"
		ordering = ( 'date', 'start_time', "category" )

class Not_At_Event_Person( models.Model ):
	event = models.ForeignKey( Event )
	user = models.ForeignKey( User )
	excused = models.BooleanField( default = False )    # CHANGEND
	comment = models.CharField( "Grund", max_length = 2000, null = True )    # CHANGEND

class Event_Person_Comment( models.Model ):
	comment = models.CharField( "Bewertung", max_length = 2000 )
	user = models.ForeignKey( User )
	event = models.ForeignKey( Event )

	def __unicode__( self ):
		return ( str( self.user.last_name ) + " " + str( self.event.name ) )

class Event_Person_Grading( models.Model ):
	grading = models.CharField( "Bewertung", max_length = 2000 )
	user = models.ForeignKey( User )
	event = models.ForeignKey( Event )

	def __unicode__( self ):
		return self.user.username

	class Meta:
		verbose_name = "Bewertung"
		verbose_name_plural = "Bewertungen"








