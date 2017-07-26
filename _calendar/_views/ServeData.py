from datetime import datetime
import gc
import json
import sys
import time
import traceback

from django.core import serializers
from django.http.response import JsonResponse, HttpResponse
from _calendar.models import Event, Event_Person_Comment, Not_At_Event_Person
from _ui.BaseView import BaseView
from _user.models import Person
from utils.TimeUtils import Watch


#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2016						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################
class ServeDataView( BaseView ):
	def __init__( self , request ):
		BaseView.__init__( self , request )

	def serve_data( self ):
		events = []    # list with all events (by user)
		key = None
		w = Watch( "ServeDataView.serve_data" )
		w.start()
		gc.disable()

		print( "---------------------------------------" )
		print( "------------  serving data ------------" )

		if self.request.method == 'POST':
			# return JsonResponse( data, safe = False )
			key = self.request.POST.get( 'key', None )
			_day = self.request.POST.get( "day", None )
		else:
			key = "events"
			_day = "2016-11-08"

		print( "------------  POST key : " + str( key ) )
		print( "------------  POST _day : " + str( _day ) )

		#data = serializers.serialize( "json", Person.objects.all() )
		print( "------------  Parsed all persons as json" )

		if key != "events":
			print( "WARNING: Missing key = events returning empty map" )
			return JsonResponse( data, safe = False )

		try:
			_day = datetime.strptime( _day, '%Y-%m-%d' )
		except:
			_day = datetime.now()
			print ( "WARNING: Day from post could not be parsed! Using today as default! " + str( _day ) )


		print( "------------  Loading events..." )

		if BaseView.is_superuser( self ):
			query_day = _day.strftime( '%d' )
			query_month = _day.strftime( '%m' )
			query_year = _day.strftime( '%Y' )
			#print( "------------ date " + str( _day ) + " " + str( _day.year ) + " " + str( _day.month ) + " " + str( _day.day ) )
			#events = Event.objects.filter( date__year = query_year, date__month = query_month, date__day = query_day )    # )    # (date__gt=min_date, date__lt=max_date)min_date = _day    # timedelta(days=int(-_days)) + _day
			events = Event.objects.filter( date__year = _day.year, date__month = _day.month, date__day = _day.day )
		else:
			events = Event.objects.filter( date__year = _day.year, date__month = _day.month, date__day = _day.day, lead = self.current_user )    # (date__gt=min_date, date__lt=max_date)	max_date = _day _days = self.request.POST.get( 'days', None )   # timedelta(days=int(_days)) + _day

		print( "------------  Loading events done! " + str(len(events)))
		print( "------------  Parsing events..." )
		days = self.pase_events( events )
		print( "------------  Parsing events done!" )

		if ( len( days ) == 0 ):
			data = {}
		else:
			data = json.dumps( days )

		print( "------------ Time needed: " )
		print( w.display() )
		print( "---------------------------------------" )
		
		return JsonResponse( data, safe = False )

	#
	# parses a event to a list of dictionaries serialized as JSON
	#
	def pase_events( self, events ):

		days = {}

		for event in events:
			user_list = []    # list of all participating users
			lead = event.lead
			event_dic = {}    # dictionary that contains all preformatted informations
			curr_date = event.date
			curr_start_time = event.start_time
			curr_end_time = event.end_time
			event_dic["user_is_superuser"] = BaseView.is_superuser( self )

			if lead != None:
				if lead.first_name and lead.last_name:
					event_dic["lead"] = str( lead.last_name.encode( 'utf-8' ) + " " + str( lead.first_name[0].encode( 'utf-8' ) ) + "." )
				elif lead.last_name:
					event_dic["lead"] = str( lead.last_name.encode( 'utf-8' ) )
				else:
					event_dic["lead"] = "Kein Lehrer"

				event_dic["lead_id"] = str( lead.id )

				if hasattr( lead, "person" ):
					event_dic["lead_phone"] = str( lead.person.phone )
					event_dic["lead_mobile"] = str( lead.person.mobile )

			date_as_string = curr_date.strftime( '%d.%m.%Y' )
			date_as_utc = curr_date.strftime( '%Y-%m-%d' )
			start_time_str = curr_start_time.strftime( '%H:%M' )
			curr_end_time_str = curr_end_time.strftime( '%H:%M' )
			
			#print( "------------date_as_string " + date_as_string )
			#print( "------------date_as_utc " + date_as_utc )

			event_dic["date"] = date_as_string
			event_dic["day_of_week"] = event.date.strftime( "%A" )
			event_dic["date_as_utc"] = date_as_utc
			event_dic["start_time"] = start_time_str
			event_dic["end_time"] = curr_end_time_str
			event_dic["id"] = event.id

			if event.room:
				event_dic["room"] = int( event.room.id )
			else:
				event_dic["room"] = 0
			if event.event_group:
				event_dic["event_group"] = int( event.event_group.id )
			else:
				event_dic["event_group"] = 0
			if event.category:
				event_dic["category"] = str( event.category )
				event_dic["category_small"] = str( event.category ).lower()
			else:
				event_dic["category"] = "Kein Fach"

			#print( "------------ loading events users... " )

			if event.users.all() != None:
				for user in event.users.all():
					_user = {}
					_user["user_name"] = user.first_name + " " + user.last_name
					_user["user_id"] = user.id

					try:
						comment = Event_Person_Comment.objects.get( user = user, event = event )
						_user["comment"] = comment.comment
					except:
						pass
					try:
						Not_At_Event_Person.objects.get( user = user, event = event )	
						_user["person_absent"] = True
					except:
						pass
					try:
						person_not_excused = Not_At_Event_Person.objects.get( user = user, event = event )	
						_user["person_not_excused"] = ( person_not_excused.excused == False )
						_user["person_not_excused_comment"] = person_not_excused.comment
					except:
						pass
					try:	
						person = user.person
						if person:
							_user["user_phone"] = str( person.phone )
							_user["user_mobile"] = str( person.mobile )
					except:
						pass
					user_list.append( _user )

			#print( "------------ loading events users done! " )

			event_dic["user_list"] = user_list

			tmp_list = []
			if ( date_as_utc in days ):
				tmp_list = days[date_as_utc]

			tmp_list.append( event_dic )
			days[date_as_utc] = tmp_list

		return days
