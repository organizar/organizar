# coding=UTF-8
from datetime import timedelta
import traceback

from django.http.response import HttpResponseRedirect, HttpResponse
from django.template import loader

from _calendar.forms import Event_Group_Form
from _calendar.models import Event, Event_Group
from _ui.BaseView import BaseView
from _utils.template_utils import set_session_var


class HandleEventGroupView( BaseView ):
	

	###################################################################
	# SYNC EVENTS							  #
	###################################################################
	
	def sync_events( self ):
	
		events = Event.objects.order_by( "date", "room" ).all()
		event_groups = Event_Group.objects.all()
		info = "fehler beim synchronisieren"
	
		# loop over all event groups
		for curr_event_group in event_groups:
	
			event_per_group = {}
			counter = 0
			start_date = curr_event_group.start_date
			end_date = curr_event_group.end_date
	
			try:
				date_delta = start_date - end_date
			except:
				date_delta = None
	
			# if start date and end date exists
			if start_date and end_date and date_delta:
	
				# try to get events from group
				try:
					events_from_curr_group = Event.objects.order_by( "date", "start_time" ).filter( event_group = curr_event_group )
					counter = 0
					nbr_of_found_events = len( events_from_curr_group )
	
					# if nbr_of_found_events is one create serie
					if ( nbr_of_found_events == 1 ):
						base_event = events_from_curr_group[0]
						org_event = base_event
						start_date = base_event.date
	
						try:
							date_delta = start_date - end_date
							nbr_of_neccecary_events = self.get_nbr_of_neccecary_events( date_delta )
							date_for_serie = start_date
	
							if nbr_of_neccecary_events < 9000:
								while counter < nbr_of_neccecary_events:
									increased_delta = timedelta( days = 7 )
									date_for_serie = date_for_serie + increased_delta
									self.clone_event( base_event, date_for_serie )
									counter = counter + 1
							else:
								print ( "safety break more then 9000 events!" )
	
						except:
							print ( "could not set event " + str( base_event ) )
					# check serie and update missing events
					elif( nbr_of_found_events > 1 ):
	
						nbr_of_neccecary_events = self.get_nbr_of_neccecary_events( date_delta )
						date_for_serie = start_date
						first_event = events_from_curr_group[0]
						date_for_serie = first_event.date
						event_dates = []
	
						if ( len( events_from_curr_group ) < nbr_of_neccecary_events ):
							if nbr_of_neccecary_events < 5000:
	
								for event in events_from_curr_group:
									event_dates.append( event.date )
	
								while counter < nbr_of_neccecary_events:
	
									if date_for_serie in event_dates:
										print ( "date found ! :) not cloning event" )
									else:
										print ( "date not found... :( cloning event" )
										self.clone_event( first_event, date_for_serie )
	
									increased_delta = timedelta( days = 7 )
									date_for_serie = date_for_serie + increased_delta
									counter = counter + 1
	
							else:
								print ( "safety break there are more then 5000 events!" )
						else:
							print ( "event group has correct nbr of events" )
	
					info = "Stunden erfolgreich synchronisiert!"
	
				except:
					print ( "no event in group" )
					print ( traceback.format_exc() )
				

	def render( self, event_id, event_group_id ):
		form = Event_Group_Form()
		event = None
		start_date = None
		end_date = None
		print ( "HANDLE EVENT GROUP" )
		print ( "event_id " + event_id )
	
		try:
			event = Event.objects.get( pk = event_id )
			form = Event_Group_Form( data = {'start_date': event.date, 'name' : event.name } )
			start_date = event.date
	
			try:
				int( event_group_id )
				requested_event_group = Event_Group.objects.get( pk = event_group_id )
				end_date = requested_event_group.end_date
				start_date = requested_event_group.start_date
				if self.self.request.method == 'POST':
					form = Event_Group_Form( data = self.request.POST, instance = self.requested_event_group )
				else:
					form = Event_Group_Form( instance = self.requested_event_group )
				set_session_var( "status_info", "Gruppe bearbeiten!", self.request )
			except:
				set_session_var( "status_info", "Neue Gruppe anlegen!", self.request )
				if self.request.method == 'POST':
					form = Event_Group_Form( data = self.request.POST )
	
			if self.request.method == 'POST':
				if form.is_valid():
					event_group = form.save()
					event.event_group = event_group
					event.save()
					form = Event_Group_Form( instance = event_group )
					set_session_var( "status_info", "Gruppe erfolgreich gespeichert!", self.request )
					self.sync_events()
	
					return HttpResponseRedirect( '/edit/event_group/' + str( event.pk ) + "/" + str( event_group.pk ) + "/" )
				else:
					set_session_var( "status_info", "Gruppe konnte nicht gespeichert werden!", self.request )
	
		except:
			form = None
			set_session_var( "status_info", "Keine passende Stunde gefunden! Bitte legen Sie zuerst eine Stunde an!", self.request )
	
		context = self.requestContext( self.request, {
			'form': form,
			"form_type" : "event_group",
			'start_date': start_date,
			"end_date"	: end_date,
		} )
	
		template = loader.get_template( 'base/placeholder.html' )
	
		return HttpResponse( template.render( context ) )
	
	# CLONE EVENT
	def clone_event( self, event, date = None ):
	
		all_users = event.users.all()
		event_clone = event
		event_clone.pk = None
	
		if date != None:
			event_clone.date = date
	
		event_clone.save()
	
		for user in all_users:
			event_clone.users.add( user )
			event_clone.save()
	
	def get_nbr_of_neccecary_events( self, date_delta ):
	
		try:
			nbr_of_neccecary_events = str( date_delta ).split( " " )
	
			if len( nbr_of_neccecary_events ) > 1:
				nbr_of_neccecary_events = int( nbr_of_neccecary_events[0] )
			else:
				nbr_of_neccecary_events = int( str( date_delta ).split( ":" )[0] )
		
			# generate positive value if neccecary
			if nbr_of_neccecary_events < 0:
				nbr_of_neccecary_events = nbr_of_neccecary_events * -1
	
			# only one per week
			if nbr_of_neccecary_events >= 7:
				nbr_of_neccecary_events = nbr_of_neccecary_events / 7
		except:
			nbr_of_neccecary_events = 0
	
		return nbr_of_neccecary_events
	
	
	
	
	def get_smallest_date_from( self, array ):
		smallest_date = None
		counter = 0
	
		for elem in array:
			elem = array[counter]
			curr_date = elem.date
	
			if smallest_date == None:
				smallest_date = curr_date
			else:
				if curr_date < smallest_date:
					smallest_date = curr_date
	
			counter += 1
	
		return smallest_date
	

