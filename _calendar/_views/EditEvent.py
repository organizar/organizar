# coding=UTF-8
import sys
import traceback

from django.contrib.auth.models import User
from django.http.response import HttpResponse, HttpResponseRedirect
from django.template import loader

from _calendar.forms import Event_Group_Form, Event_Form, Not_At_Event_Form
from _calendar.models import Event_Group, Event
from _ui.BaseView import BaseView
from _utils.template_utils import set_session_var


#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2016						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################
class EditEventView( BaseView ):

	def render( self, event_group_id ):
		print( "=================================" )
		print( "=================================" )
		print( "========== EDIT EVENT ===========" )
		print( "=================================" )
		print( "=================================" )

		set_session_var( "status_info", "", self.self.request )
		form_type = "event_group"
		form = None
		self.self.requested_event_group = None
		info = None

		if event_group_id != None:
			self.self.requested_event_group = Event_Group.objects.get( pk = event_group_id )
	
		if self.self.requested_event_group != None:
			if self.self.request.method == 'POST':
				form = Event_Group_Form( data = self.self.request.POST, instance = self.requested_event_group )
	
				if form.is_valid():
					form.save()
					set_session_var( "status_info", "Gruppe erfolgreich editiert!", self.request )
			else:
				form = Event_Group_Form( instance = self.requested_event_group )
		else:
			set_session_var( "status_info", "Die gewünschte Gruppe konnte leider nicht gefunden werden.", self.request )
	
		if info == None:
			context = self.requestContext( self.request, {
				'form': form,
				"form_type"   : form_type,
			} )
		else:
			context = self.requestContext( self.request, {
				'info': info,
			} )
	
		template = loader.get_template( 'base/placeholder.html' )
	
		return HttpResponse( template.render( context ) )

	def render_event( self, event_id, user_id, action ):
		print( "=================================" )
		print( "=================================" )
		print( "========== EDIT EVENT ===========" )
		print( "=================================" )
		print( "=================================" )

		event = None
		if action != None:
			#
			# try to get the event from the database
			#
			try:
				if event_id != None and not isinstance( event_id, str ) and str( event_id ) != "new":
					event_id = long( event_id )
					try:
						event = Event.objects.get( pk = event_id )
					except:
						print ( "ERROR GETTING EVENT WITH ID " + str( event_id ) )
			except:
				event = None

		#
		# try to get the user from the database
		#
		try:
			if user_id != None and not isinstance( user_id, str ):
				try:
					user_id = int( user_id )
					user = User.objects.get( id = user_id )
				except ValueError:
					print ( "user id but no user" + str( user_id ) )
		except:
			user = None
		if action == "edit" or action == "add":
			if action == "edit":
				set_session_var( "status_info", "Stunde bearbeiten!", self.request )
			else:
				set_session_var( "status_info", "Neue Stunde anlegen!", self.request )

			print ( "~~~~~~~ EDIT ~~~~~~~~ " + str( event_id ) )

			if event != None:
				form = Event_Form( instance = event )
			else:
				form = Event_Form( initial = {'name': "test"} )
				form.fields["name"].initial = "test"

			if self.request.method == 'POST':

				if event != None:
					form = Event_Form( self.request.POST, instance = event )
				else:
					form = Event_Form( self.request.POST )

				try:
					the_event = form.save()

					if the_event.lead:
						username = the_event.lead.username
					else:
						username = "no user"

					if the_event.category:
						category = the_event.category.name
					else:
						category = "no-category"

					if the_event.room and the_event.room.id:
						room = the_event.room.id
					else:
						room = "none"

					e_start_time = the_event.start_time.strftime( "%H:%M" )
					e_end_time = the_event.end_time.strftime( "%H:%M" )
					e_date = the_event.date.strftime( "%A" )

					the_event.name = username + " " + category + " raum " + str( room ) + " " + e_start_time + " " + e_end_time + " " + e_date
					the_event.save()

					print ( "event saved" )


					set_session_var( "status_info", "Stunde erfolgreich gespeichert!", self.request )

					return HttpResponseRedirect( '/event/' + str( the_event.pk ) + "/edit/" )

				except:
					print ( sys.exc_info()[0] )
					print ( "form is not valid!" )
					print ( traceback.format_exc() )

		elif action == "delete":
			event.delete()
			set_session_var( "status_info", "Stunde erfolgreich gelöscht!", self.request )

			return HttpResponseRedirect( '/calendar' )

		elif action == "not-participating":
			form = Not_At_Event_Form()
		else:
			form = Event_Form()
			
		return form
