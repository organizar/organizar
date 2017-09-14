# coding=UTF-8



#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2014						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################



#################
# 				#
# IMPORTS 		#
# 				#
#################
from datetime import datetime, timedelta, date
import json
import logging
import os
import random
import sys
import traceback

from django.conf import settings
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Q
from django.forms.models import model_to_dict
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect 
from django.http import Http404
from django.shortcuts import render_to_response
from django.template import Context
from django.template import RequestContext, loader
from django.template.loader import get_template
from django.views.decorators.cache import cache_page
from django.views.decorators.csrf import csrf_protect
from easy_pdf import rendering
from easy_pdf.views import PDFTemplateView
from reportlab.pdfgen import canvas
from xhtml2pdf import pisa

from _billing.models import Contract
from _calendar._views.EditEvent import EditEventView
from _calendar._views.HandleEventGroup import HandleEventGroupView
from _calendar._views.PrintContract import PrintContractView
from _calendar._views.PrintEvents import PrintEventsView
from _calendar._views.PrintEventsByUser import PrintEventsByUserView
from _calendar._views.ServeData import ServeDataView
from _calendar.forms import LoginForm, Event_Form, Event_Serie_Form, Not_At_Event_Form, Event_Person_Comment_Form, Event_Group_Form
from _calendar.models import Event, Room, Event_Group, Category, Event_Person_Comment, Not_At_Event_Person
from _calendar._serializer.EventSerializer import EventSerializer
from _todo.models import Todo
from _user.models import Person, Billing_Contact
from _utils.template_utils import set_session_var
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
# import ho.pisa as pisa
#################
# 				#
# GLOBALS 		#
# 				#
#################
logging.basicConfig()
log = logging.getLogger( __name__ )


def link_callback( uri, rel ):
	path = os.path.join( settings.MEDIA_ROOT, uri.replace( settings.MEDIA_URL, "" ) )
	return path 

#####################################################################
# 																	#
# DEF placeholder()													#
# 																	#
#####################################################################
@login_required( login_url = '/' )
def placeholder( request, user_id = None, event_id = None, action = None ):

	print ( "~~~~~~~~~~~~~~~~~ placeholder ~~~~~~~~~~~~~~~~~~~" )
	print ( "event_id " + str( event_id ) )
	print ( "user_id  " + str( user_id ) )
	print ( "action   " + str( action ) )

	show_events = False
	user = None
	form = None
	form_second = None
	form_action = "../save/"
	form_type = None
	event = None
	final_event_list = None
	todos = Todo.objects.filter( done = False )[:10]
	json_events = []
	template = loader.get_template( 'base/placeholder.html' )
	persons = Person.objects.all()
	all_users = User.objects.all()

	if user_id != None and user_id.find( "/" ) > -1:
		id_data = user_id.split( "/" )
		user_id = id_data[1]
		event_id = id_data[2]

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


		################################################################
		# EVENTS
		################################################################
		if event_id != None and event != None:
			form_type = "event"


			#
			# EDIT
			# or 
			# NEW / ADD
			#
			# Event
			#
			if action == "edit" or action == "add":

				if action == "edit":
					set_session_var( "status_info", "Stunde bearbeiten!", request )
				else:
					set_session_var( "status_info", "Neue Stunde anlegen!", request )

				print ( "~~~~~~~ EDIT ~~~~~~~~ " + str( event_id ) )

				if event != None:
					form = Event_Form( instance = event )
				else:
					form = Event_Form( initial = {'name': "test"} )
					form.fields["name"].initial = "test"

				if request.method == 'POST':

					if event != None:
						form = Event_Form( request.POST, instance = event )
					else:
						form = Event_Form( request.POST )

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


						set_session_var( "status_info", "Stunde erfolgreich gespeichert!", request )

						return HttpResponseRedirect( '/event/' + str( the_event.pk ) + "/edit/" )

					except:
						print ( sys.exc_info()[0] )
						print ( "form is not valid!" )
						print ( traceback.format_exc() )

			elif action == "delete":
				print(str(event));
				event.delete()
				set_session_var( "status_info", "Stunde erfolgreich gelöscht!", request )

				return HttpResponseRedirect( '/calendar' )

			elif action == "not-participating":
				form = Not_At_Event_Form()
			else:
				form = Event_Form()
	else:
		show_events = True

	if show_events:
		set_session_var( "status_info", "Termine werden geladen... Bitte warten...", request )
	else:
		set_session_var( "status_info", None, request )

	context = RequestContext( request, {
		'events' : final_event_list,
		'all_users' : all_users,
		'persons' : persons,
		'form': form,
		"form_second"	: form_second,
		"form_action"	: form_action,
		"form_type"		: form_type,
		"json_events"	: json.dumps( json_events ),
		"todos"			: todos,
		"show_events"	: show_events,
	} )

	return HttpResponse( template.render( context ) )




###################################################################
# INDEX							  	  #
###################################################################

def index( request ):
	print( "~~~~~~~~~~~~~~~~~ index ~~~~~~~~~~~~~~~~~~~" )
	username = request.POST.get( 'username', "" )
	password = request.POST.get( 'password', "" )
	form = LoginForm(initial={"password": "      ", "username":""})
	template = "base/index.html"

	if request.user.is_authenticated():
		return HttpResponseRedirect( 'calendar' )
	else:
		user = None
		print( "trying to log in..." )

		if request.method == 'POST':

			form = LoginForm( request.POST )
			if form.is_valid():
				user = authenticate( username = username, password = password )

				if user is not None:
					if user.is_active:
						try:
							login( request, user )

							return HttpResponseRedirect( 'calendar' )
						except:
							print ( "ERROR on login" )

	context = RequestContext( request, {
		'form': form,
	} )

	template = loader.get_template( template )

	return HttpResponse( template.render( context ) )


@login_required( login_url = '/' )
def serve_data( request = None ):
	view = ServeDataView( request )
	return view.serve_data()

###################################################################
# DELETE GROUP							  #
###################################################################

@login_required( login_url = '/' )
def delete_group( request, group_id = None ):

	if group_id != None:
		group = Event_Group.objects.filter( pk = group_id )
		events = Event.objects.filter( event_group = group )
		group.delete()

		print ( "deleted group " + str( group ) )

		for event in events:
			event.delete()

	# template = loader.get_template('base/placeholder.html')
	# context = RequestContext(request, {
	# 	'info': "group deleted",
	# })

	# return HttpResponse(template.render(context))
	return HttpResponseRedirect( '/calendar' )



###################################################################
# MOVE DATES INTO FUTURE					  #
###################################################################

@login_required( login_url = '/' )
def move_dates_one_day_into_the_future( request ):
	info = "ok"
	all_events = Event.objects.all()
	print ( "~~~~~~~~~~~~ move into future ~~~~~~~~~~~~" )
# 	for event in all_events:
# 		new_date = timedelta(days=int(1)) + event.date
# 		event.date = new_date
# 		date = event.date
# 		event.date = date.replace(hour=0)
# 		start_time = event.start_time
# 		event.start_time = start_time.replace(day=1, month=1, year=1900)
# 		end_time = event.end_time
# 		event.end_time = end_time.replace(day=1, month=1, year=1900)
# 		start_time = event.start_time
# 		end_time = event.end_time
# 		start_time = timedelta(hours=int(1)) + start_time
# 		end_time = timedelta(hours=int(1)) + end_time
# 		event.start_time = start_time
# 		event.end_time = end_time
# 		event.save()
#
	context = RequestContext( request, {
		'info': info,
	} )

	template = loader.get_template( 'base/placeholder.html' )

	return HttpResponse( template.render( context ) )




###################################################################
# EDIT GROUP							  #
###################################################################

@login_required( login_url = '/' )
def edit_group( request, group_id = None, event_id = None ):
	set_session_var( "status_info", "Gruppen Serie bearbeiten. Achtung! Sie bearbeiten alle Stunden in dieser Serie!", request )
	user_list = None
	group_form = None
	form = None
	event_to_delete = []
	info = ""

	if group_id != None:
		group = Event_Group.objects.get( pk = group_id )
		events = Event.objects.filter( event_group = group )

		if event_id == None:
			first_event = None
		else:
			first_event = Event.objects.get( pk = event_id )

		form = Event_Serie_Form( instance = first_event )

		if request.method == 'POST':
			data = request.POST.copy()
			name = request.POST.get( "name", None )
			start_time = request.POST.get( "start_time", None )
			end_time = request.POST.get( "end_time", None )
			room = request.POST.get( "room", None )
			users = request.POST.get( "users", None )
			category = request.POST.get( "category", None )
			lead = request.POST.get( "lead", None )
			users = request.POST.getlist( "users", None )
			date = request.POST.get( "date", None )

			try:
				form = Event_Serie_Form( data = data, instance = first_event )
			except:
				form = Event_Serie_Form( data = data )

			try:
				user_counter = 0
				user_list = []

				for user in users:
					try:
						user = User.objects.get( pk = user )
						user_list.append( user )
					except:
						print ( sys.exc_info() )
						print ( traceback.format_exc() )
					user_counter = user_counter + 1

			except:
				print ( sys.exc_info() )
				print ( traceback.format_exc() )

				user_list = None

			try:
				category = Category.objects.get( pk = category )
			except:
				category = None
			try:
				room = Room.objects.get( pk = room )
			except:
				room = None
			try:
				lead = User.objects.get( pk = lead )
			except:
				lead = None

			start_time = datetime.strptime( start_time, '%d.%m.%Y %H:%M' )    # .replace(tzinfo=utc)
			end_time = datetime.strptime( end_time, '%d.%m.%Y %H:%M' )    # .replace(tzinfo=utc)
			date = datetime.strptime( date, '%d.%m.%Y' )    # datetime.strptime(date, '%d.%m.%Y')
			org_date = first_event.date
			delta = date - org_date

			if name != None and name != "":
				group.name = name
			try:
				group.start_time = start_time
				group.end_time = end_time
				group.save()
				info = "Gruppe gespeichert!"
			except:
				info = "Gruppe konnte <b>nicht</b> gespeichert werden!"

			for event in events:

				if event.date < start_time or event.date > end_time:
					print ( "APPENDING EVENT TO DELETE" )
					print( event.date < start_time )
					print( event.date > end_time )
					print( event.date )
					print( start_time )
					print( end_time )
					event_to_delete.append( event )
				else:
					print( "DID NOT APPEND EVENT TO DELETE" )
				if name != None and name != "":
					event.name = name

				try:
					event.start_time = start_time
					event.end_time = end_time
				except:
					print ( "could not set event time" )

				if room != None and room != "":
					event.room = room

				if category != None and category != "":
					event.category = category

				if lead != None and lead != "":
					event.lead = lead

				if user_list != None:
					event.users = user_list

# 				if date != None:
# 					try:
# 						old_date = event.date
# 
# 						if org_date < date:
# 							new_date = delta + old_date
# 						else:
# 							new_date = delta - old_date
# 
# 						if old_date == new_date:
# 							print "date is equal"
# 						else:
# 							print "NO set new date " + str(new_date)
# 							event.date = new_date
# 					except:
# 						print "error setting date"
				try:
					event.save()
				except:
					info = "Fehler beim bearbeiten der Stunden!" + str( traceback.format_exc() )
			# return HttpResponseRedirect('/calendar')
		else:
			form = Event_Serie_Form( instance = first_event )

	context = RequestContext( request, {
		'form': form,
		"info" : info,
		"form_type" : "edit_group",
		"event_to_delete" : event_to_delete,
	} )

	template = loader.get_template( 'base/placeholder.html' )

	return HttpResponse( template.render( context ) )


###################################################################
# ADD USER COMMENT						  #
###################################################################

@login_required( login_url = '/' )
def add_user_comment( request, event_id = None, user_id = None ):
	form_type = "standard_form"
	form = None
	info = None
	event = None
	user = None
	comment = None
	
	if event_id != None:
		event = Event.objects.get( pk = event_id )

	if user_id != None:
		user = User.objects.get( pk = user_id )

	try: 
		comment = Event_Person_Comment.objects.get( user = user, event = event )
		form = Event_Person_Comment_Form( instance = comment )
	except:
		form = Event_Person_Comment_Form( initial = {'user': user, "event":event} )
		print ( traceback.format_exc() )

	if request.method == 'POST':

		data = request.POST.copy()

		if comment != None:
			form = Event_Person_Comment_Form( data = data, instance = comment )
		else:
			form = Event_Person_Comment_Form( data = data )

		if form.is_valid():
			event_group = form.save()
			info = "Kommentar gespeichert!"
			# return HttpResponseRedirect('/calendar')
		else:
			form.errors
			info = "Kommentar NICHT gespeichert!"

	context = RequestContext( request, {
		'info': info,
		'form': form,
		"form_type" : form_type,
	} )

	template = loader.get_template( 'base/placeholder.html' )

	return HttpResponse( template.render( context ) )




###################################################################
# NOT PARTICIPATING					  	  #
###################################################################

@login_required( login_url = '/' )
def user_not_participating( request, event_id = None, user_id = None ):
	event = None
	user = None
	user_not_participating = None
	excused = request.GET.get( 'excused', None )
	comment = request.GET.get( 'comment', None )

	print ( "USER IS EXCUSED? " + str( excused ) )
	print ( "COMMENT TO THE USER " + str( comment ) )

	if excused == None or excused == "None" or excused == "Null":
		excused = None
	elif excused == "true" or excused == "True":
		excused = True
	else:
		excused = False

	if event_id != None:
		event = Event.objects.get( pk = event_id )

	if user_id != None:
		user = User.objects.get( pk = user_id )

	try: 
		user_not_participating = Not_At_Event_Person.objects.get( user = user, event = event )
	except:
		print ( "user was participating" )
		# print traceback.format_exc()

	if user_not_participating != None:

		print ( "USER IS EXCUSED? " + str( excused ) )

		if excused == None:
			user_not_participating.delete()
			
		else:
			user_not_participating.excused = excused
	
			if comment != None:
				user_not_participating.comment = comment
	
			user_not_participating.save()
	else:
		not_at_event = Not_At_Event_Person()
		not_at_event.user = user
		not_at_event.event = event
		not_at_event.excused = excused
		if comment != None:
			not_at_event.comment = comment
		not_at_event.save()

	return HttpResponseRedirect( '/calendar' )





#####################################################################
# ADD GROUP					 										#
#####################################################################

@login_required( login_url = '/' )
def handle_event_group( request, event_id = None, event_group_id = None ):
	view = HandleEventGroupView( request )
	return view.render( event_id, event_group_id )




###################################################################
# EDIT GROUP					  		  #
###################################################################

@login_required( login_url = '/' )
def edit_event_group( request, event_group_id = None, event_id = None ):
	return EditEventView.render( event_group_id )



###################################################################
# PRINT EVENTS							  #
###################################################################
# def getTemplate(contract):
# 	t = Template(open('../templates/base/pdf_templates/contract.rml').read())
# 	c = Context({"contracts": contract})
# 	rml = t.render(c)
# 	#django templates are unicode, and so need to be encoded to utf-8
# 	return rml.encode('utf8')

class ContractPDFView( PDFTemplateView ):
	try:
		template_name = settings.APP_ROOT + "/templates/base/print_contract.html"
		template_name = "test"
	except:
		template_name = "test"

	def get_context_data ( self, **kwargs ):
		template_name = settings.APP_ROOT + "/templates/base/print_contract.html"
		context = {
			"users"			: {},
			"calendar"		: None,
			"contracts"		: None,
			"contract"		: None,
			"today"			: None,
		}
		pdf = rendering.render_to_pdf( template_name, context, encoding = u'utf-8', **kwargs )

		return super ( self.__class__, self ).get_context_data( 
			pagesize = "A4",
			title = "Hi there",
			**kwargs
		)


def convertHtmlToPdf( sourceHtml, outputFilename ):
	# open output file for writing (truncated binary)
	resultFile = open( outputFilename, "w+b" )

	# convert HTML to PDF
	pisaStatus = pisa.CreatePDF( 
			sourceHtml,    # the HTML to convert
			dest = resultFile )    # file handle to recieve result

	# close output file
	resultFile.close()    # close output file

	# return True on success and False on errors
	return pisaStatus.err



@login_required( login_url = '/' )
def get_contracts_with_pdf( contracts ):
	contracts_array = []
	path = settings.MEDIA_ROOT + '/pdf/contracts/'
	pdfDir = os.listdir( path )
	pdfDir.sort()

	for contract in contracts:
		contract_dic = {}
		pdfs = []
		contract_dic = contract.__dict__

		for sFile in pdfDir:
			if sFile.find( contract.number ) > -1:
				pdfObj = {}
				pdfObj["path"] = "/media/pdf/contracts/" + sFile
				pdfObj["name"] = sFile
				pdfs.append( pdfObj )

		discounts = ""
		
		for discount in contract.discount.all():
			discounts = discounts + discount.name + ", "

		contract_dic["type"] = contract.type.name
		contract_dic["discount"] = discounts
		contract_dic["contact"] = contract.contact.first_name + " " + contract.contact.last_name
		contract_dic["billing_contact"] = contract.billing_contact.first_name + " " + contract.billing_contact.last_name
		contract_dic["pdfs"] = pdfs
		contract_dic["calc_price"] = contract.calc_price()
		contracts_array.append( contract_dic )

	return contracts_array

@login_required( login_url = '/' )
def contract_list( request ):
	contracts = None
	old_contracts = None
	old_contracts_list = None
	contracts_list = None

	try:
		contracts = Contract.objects.filter( end_date__gt = datetime.now() ).order_by( 'end_date' )
		old_contracts = Contract.objects.filter( end_date__lt = datetime.now() ).order_by( 'end_date' )
		contracts_list = get_contracts_with_pdf( contracts )
		old_contracts_list = get_contracts_with_pdf( old_contracts )
	except Exception as e:
		print ( "could not find contracts" + e.message )
	
	context = RequestContext( request, {
		'contracts': contracts_list,
		'old_contracts': old_contracts_list
	} )

	template = loader.get_template( 'base/contract_list.html' )

	return HttpResponse( template.render( context ) )



@api_view(['POST', 'GET'])
def edit_event(request, id=None):
	if (id == None):
		return
	event = Event.objects.get(id=id)
	if request.method == 'GET':
		serialized = EventSerializer(instance=event, many=False)
	
	if request.method == 'POST':
		try:
			event_data = request.data["data"]
			json_event = json.loads(event_data)
			serialized = EventSerializer(instance=event, data=json_event, many=False)
			if(serialized.is_valid()):
				serialized.save()
				print("saved " + str(serialized.validated_data))
			else:
				print(serialized.errors)
				print("not valid!" + str(event_data))

		except:
			print ( traceback.format_exc() )
			print("error saving event"  + event.name)
	return JsonResponse(serialized.data, safe=False)

@api_view(['POST', 'GET'])
@parser_classes((JSONParser,))
def all_events(request, from_date=None, to_date=None):
    """
    List all code events, or create a new event.
    """
    if from_date != None and to_date != None:
	from_date = datetime.strptime(from_date, '%Y-%m-%d')
        to_date = datetime.strptime(to_date, '%Y-%m-%d')
        events = Event.objects.filter(date__range=[from_date, to_date])
    else:
	events = Event.objects.all()
        
    serializer = EventSerializer(events, many=True)

    return JsonResponse(serializer.data, safe=False)



# @cache_page(60 * 15)
# @csrf_protect
@login_required( login_url = '/' )
def print_hours( request, user_id = None, from_date = None, to_date = None ):
	view = PrintEventsByUserView( request, user_id )
	return view.render()


@login_required( login_url = '/' )
def print_contract( request, contract_id = None ):
	view = PrintContractView( request )
	return view.render( contract_id )



# 	with open(settings.APP_ROOT + "/templates/base/print_contract.html", "r") as inFile:
# 		for line in inFile:
# 			html_template = html_template + line
# 
# 	pisa.showLogging()
# 	convertHtmlToPdf(html_template, "test.pdf")
# 
# 	# Create the PDF object, using the response object as its "file."
# 	p = canvas.Canvas(response)
# 
# 	# Draw things on the PDF. Here's where the PDF generation happens.
# 	# See the ReportLab documentation for the full list of functionality.
# 	p.drawString(100, 100, html_template)
# 
# 	# Close the PDF object cleanly, and we're done.
# 	p.showPage()
# 	p.save()
# 
# 	print settings.APP_ROOT + "/templates/base/print_contract.html"
# 	view = ContractPDFView()
# 	print view
# 	#response = view.get_pdf_response()
# 	#print response
# # 	response = HttpResponse(mimetype="text/plain")
# # 	response.write("moved")
# 	return response
# 	try:
#  	
# 		# convert a web page and store the generated PDF into a pdf variable
# 		#pdf = client.convertURI('http://www.google.com')
# 
# 		with open(settings.APP_ROOT + "/templates/base/print_contract.html", "r") as inFile:
# 			for line in inFile:
# 				html_template = html_template + line
# 
# 		# convert an HTML string and save the result to a file
# 		pdf = open('html.pdf', 'wb')
# 		#client.convertHtml(html_template, pdf)
# 		pdf.close()
#  
# 		# convert an HTML file
# # 		pdf = open('file.pdf', 'wb')
# # 		client.convertFile('/path/to/MyLayout.html', pdf)
# # 		pdf.close()
#  
# 		response.write(pdf)
# 
# 	except pdfcrowd.Error, why:
# 		response = HttpResponse(mimetype="text/plain")
# 		response.write("why")
# 
# 	return response



# 	template = get_template("../templates/base/pdf_templates/contract.rml")
# 	context = Context({"contracts": contract})
# 	html  = template.render(context)
# 	result = StringIO.StringIO()
# 
# 	pdf = pisa.pisaDocument(StringIO.StringIO(html.encode("ISO-8859-1")), result)
# 	if not pdf.err:
# 		return HttpResponse(result.getvalue(), mimetype='application/pdf')
# 	return HttpResponse('We had some errors<pre>%s</pre>' % escape(html))

# 	template = getTemplate(filename);
# 	buf = cStringIO.StringIO()
# 	rml2pdf.go(template, outputFileName=buf)
# 	buf.reset()
# 	pdfData = buf.read()
# 
# 	response.write(pdfData)
# 
# 
# # 	pdf = canvas.Canvas(response)
# # 
# # 	pdf.drawString(100, 100, "Hello world.")
# # 
# # 	pdf.showPage()
# # 	pdf.save()
# 
# 	return response

@login_required( login_url = '/' )
def print_events( request ):
	view = PrintEventsView( request )
	return view.render()

def sync_events( request ):
	return HandleEventGroupView.sync_events()


@login_required( login_url = '/' )
def forms( request ):
	print( "~~~~~~~~~~ forms view.py _calendar ~~~~~~~~~~~~~" )
	NONE = "NONE"
	MANAGE_CLASSES = "manage_classes"
	MANAGE_TIMES = "manage_times"
	MEMBER_REGISTRATION = "member_registration"
	FORM_NEW_EVENT = "form-new_event"
	template = "base/index.html"

	if request.method == 'POST':
		form_type = request.POST.get( 'form_type', NONE )

		if form_type != NONE:
			if form_type == MANAGE_CLASSES:
				template = 'calendar/forms/form-manage-classes.html'
			elif form_type == FORM_NEW_EVENT:
				template = 'calendar/forms/form-new-event.html'
			elif form_type == MEMBER_REGISTRATION:
				template = 'calendar/forms/form-member-registration.html'
			elif form_type == MANAGE_TIMES:
				template = 'calendar/forms/form-manage-times.html'
			else:
				template = 'calendar/forms/form-manage-times.html'
		else:
			template = 'calendar/forms/form-manage-classes.html'


	context = RequestContext( request, {
		# TODO
	} )

	template = loader.get_template( template )

	return HttpResponse( template.render( context ) )



@login_required( login_url = '/' )
def calendar( request ):
	events = Event.objects.all()
	persons = Person.objects.all()
	log.error( 'persons ' + persons.query.__str__() )

	context = RequestContext( request, {
		'persons' : persons,
		'events' : events,
	} )

	if request.method == 'POST':
		# TODO TEST FOR LOGIN
		createNewEvent = request.POST.get( 'newEvent', False )
		room = request.POST.get( 'room', 2 )
		room = 2
		pos_x = request.POST.get( 'pos_x', 0 )
		pos_y = request.POST.get( 'pos_y', 0 )

		print( "savint with x %s y %s" % ( pos_x, pos_y ) )

		if ( createNewEvent ):
			newEvent = Event( category_id = 3, room_id = room, name = "kein Name", pos_x = pos_x, pos_y = pos_y )
			newEvent.save()
			print( "~~~~~~~~~~~~~~~~~~~~~~" )
			print( "created new event" )
			print( "~~~~~~~~~~~~~~~~~~~~~~" )

	template = loader.get_template( 'calendar/index.html' )

	return HttpResponse( template.render( context ) )




def import_events():
	line_counter = 0
	data = open( settings.APP_ROOT + "/_calendar/StundenRaumbelegungsplan.csv" )

	for line in data:
		attributes = line.split( "\",\"" )
		counter = 0
		# print ("~~~~~~~~~~~~~~~ line ~~~~~~~~~~~~~~~")
		# print "LINE " + line
		if line_counter < 50:
			attribute = ""
		# if True == True:
			event = None
			event_name = ""
			event_persons = ""
			create_event = True

			try:
				event = Event.objects.get( name = attribute )

				if event is not None:
					create_event = False
			except:
				event = Event()

			if create_event:
				print( "~~~~~ importing event ~~~~~~" )
				for attribute in attributes:
					user = attribute.split( " " )

					if counter == 0:
						event_name = attribute
					elif counter == 1:
						_data = attribute.split( " " )
						try:
							event.date = datetime.strptime( _data[0], '%d.%m.%Y' )    # 'Jun 1 2005  1:33PM'12.12.2013
						except:
							print ( "COULD NOT PARSE DATE " + str( _data[0] ) )
						try:
							event_name = " " + event_name + " " + _data[1]
						except:
							print ( "could not set date 1" )
						try:
							event_name = " " + event_name + " " + _data[2]
						except:
							print( "could not set date 2" )
						try:
							event_name = " " + event_name + " " + " " + _data[3] + " min )"
						except:
							print( "could not set date 3" )
					elif counter == 2:
						print ( "Fach Typ " + attribute )
					elif counter == 3:
						try:
							room = Room.objects.get( name = attribute )
						except:
							room = Room( name = attribute )
							room.save()
						event.room = room
					elif counter == 12:
						try:
							if attribute != "Vertragsende":
								event_name = event_name + " " + attribute
						except:
							print ()
					elif counter == 5:
						try:
							event_name = event_name + " telefon " + attribute
						except:
							print ( "no telephone" )
					elif counter == 14:
						try:
							_data = attribute.split( "," )
							data0 = unicode( _data[0], "ISO-8859-1" )
						except:
							print ( data0 )
						try:
							event_name = event_name + " " + data0
						except:
							print ( "no-last-name" )
						try:
							event_name = event_name + " " + _data[1]
							print ( "event name " + event_name )
						except:
							print ( "no-sur-name" )
						try:
							username = unicode( _data[0], "ISO-8859-1" )    # unicode(_data[1], "utf-8")//_data[1]
							username = username + " " + unicode( _data[1], "ISO-8859-1" )
							username = username
						except:
							print ( traceback.format_exc() )
							username = "ANOMYNOUS_" + str( line_counter )
						print( "USERNAME " + username )
						try:
							event_persons = User.objects.get( username = username )
						except:
							print ( sys.exc_info()[0] )
							try:
								event_persons = User.objects.create_user( 
									username = username,
									email = "test@test.de",
									password = 'opensesame',
								)
								event_persons.save()
							except:
								event_persons = User.objects.create_user( 
									username = "username" + str( random.randint( 10000, 99999 ) ),
									email = "test@test.de",
									password = 'opensesame',
								)
								event_persons.save()
								print ( sys.exc_info()[0] )
							try:
								person = Person()
								person.user = event_persons
								person.save()
							except:
								print ( "could not create person" )

					event.name = event_name

					counter = counter + 1
			else:
				print ( "not creating a event" )

			try:
				print ( "~~~~~~~~~~~~~~~~~~~~~~~~~~~" )
				event.save()
				event.persons.add( event_persons )
				event.save()
			except:
				print ( "ERROR: could not save event" )
				print ( sys.exc_info()[0] )

		line_counter = line_counter + 1
	data.close()
