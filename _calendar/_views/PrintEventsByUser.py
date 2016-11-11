# coding=UTF-8
from datetime import datetime
import traceback

from django.conf import settings
from django.contrib.auth.models import User
from django.core.context_processors import csrf
from django.db.models.query_utils import Q
from django.http import request
from django.http.response import HttpResponse
from django.shortcuts import render, render_to_response
from django.template import loader
from django.template.context import Context, RequestContext
from django.template.loader import get_template
from xhtml2pdf import pisa

from _calendar.models import Not_At_Event_Person, Event_Person_Comment, Event
from _ui.BaseForm import BaseForm
from _ui.BaseView import BaseView


#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2016						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################
class PrintEventsByUserView( BaseView ):
	from_date = None
	to_date = None
	user_id = None
	print_as_csv = False
	init = True
	
	def __init__( self, request, user_id ):
		self.BaseView.__init__( self, request )
		self.user_id = user_id

	def parse_request( self, user_id = None ):
		if self.request.method == 'POST':
				self.from_date = self.request.POST.get( 'from_date', None )
				self.to_date = self.request.POST.get( "to_date", None )
				self.print_as_csv = self.request.POST.get( "print_as_csv", False )
				self.init = False
				if user_id == None:
					self.user_id = self.request.POST.get( "user_id", None )
				else:
					self.user_id = user_id

	def render( self ):
		user = None
		response = None
		filename = None
		html_template = ""
		events = None
		all_not_at_evnt = Not_At_Event_Person.objects.all()
		all_comment = Event_Person_Comment.objects.all()
		
		self.parse_request()
		all_users = {}
		print( "creating pdf for user_id: " + str( self.user_id ) )
		if self.user_id == None:
			self.user_id = ""
	
		if self.to_date != None:
			to_date = datetime.strptime( self.to_date, '%m/%d/%Y' )
	
		if self.from_date != None:
			self.from_date = datetime.strptime( self.from_date, '%m/%d/%Y' )
	
		if self.from_date == None:
			self.from_date = datetime.now()
	
		print( "Loading hours.. " + self.user_id )
	
		try:
			user = User.objects.get( username = self.user_id )
		except Exception as e:
			print ( "could not find user " + str( self.user_id ) + " - " + str( e.message ) )
	
	
	
		date_today = datetime.now().strftime( "%Y%m%d_%M:%S" )
		filename = date_today
		print( "from " + str( self.from_date ) )
		print( "to " + str( self.to_date ) )
		
		if self.request.method == 'POST':
			# create a form instance and populate it with data from the request:
			form = BaseForm( self.request.POST )
			# check whether it's valid:
			if form.is_valid():
				# process the data in form.cleaned_data as required
				# ...
				# redirect to a new URL:
				print ( "valid!" )
				# if a GET (or any other method) we'll create a blank form
		else:
			form = BaseForm()

		if user != None and self.from_date != None and to_date != None:
			try:
				events = Event.objects.filter( Q( users = user ) | Q( lead = user ) ).filter( date__range = [self.from_date, self.to_date] ).order_by( 'date' )    # filter(date_gt=from_date).
			except Exception as e:
				print ( "could not find events" + str( self.user_id ) + " - " + str( e.message ) )
		if not self.print_as_csv:
			all_users = User.objects.all()
	
		context = {
			"all_users"		: all_users,
			"user"			: user,
			"events"		: events,
			"date_today"	: datetime.now().strftime( "%d.%m.%Y" ),
			"print_as_csv"	: self.print_as_csv,
			"init"			: self.init,
			"user_id"		: self.user_id,
			"from_date"		: self.from_date,
			"to_date"		: self.to_date,
			"form"			: form
		}
		# context.update(csrf(request))
		template = get_template( settings.APP_ROOT + "/templates/base/print_hours.html" )
		# return render_to_response(template, context)
		# print templsettings.APP_ROOT + "/templates/base/print_hours.html"ate
		# context.update( csrf( request ) )
	
		if events == None or len( events ) == 0:
			# templates = loader.get_template( settings.APP_ROOT + '/templates/base/print_hours.html' )
			# return HttpResponse( template.render( RequestContext( request, context ) ) )
			# return render( request, 'base/print_hours.html', context ) 
		# 	return render( 'base/print_hours.html', context )
			return render( self.request, 'base/print_hours.html', context )

	
		html = template.render( Context( context ) )
	
		if self.print_as_csv:
			print( "Exporting CSV..." )
			filename += 'export.csv'
			content_type = 'text/csv'
			response = HttpResponse( content_type = content_type )
			response = HttpResponse( content_type = 'text/csv' )
			response['Content-Disposition'] = 'attachment; filename="' + filename + '"'
			response.write( html )
			return response
		else:
			return BaseView.render_pdf( self, html )
