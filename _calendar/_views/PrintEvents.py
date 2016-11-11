# coding=UTF-8
from datetime import date, timedelta
import datetime

from django.contrib.auth.models import User
from django.db.models.query_utils import Q
from django.forms.models import model_to_dict
from django.http.response import HttpResponse
from django.template import loader

from _billing.models import Contract
from _calendar.models import Event
from _ui.BaseView import BaseView
from _user.models import Person, Billing_Contact
from _utils.template_utils import set_session_var


#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2016						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################

class PrintEventsView( BaseView ):
	def render( self ):
		set_session_var( "status_info", "", self.request )
		users = User.objects.all().order_by( 'last_name', "username" )
		contracts = Contract.objects.all().order_by( "end_date" )
		users_persons = None
		events = None
		calendar = None
		events_by_lead = None
		today = date.today()
		contract = None	
	
		if self.request.method == 'POST':
			date_from_post = self.request.POST.get( 'date', None )
			do_print_users = self.request.POST.get( "print-users", None )
			do_print_calendar = self.request.POST.get( "print-calendar", None )
			do_print_contract = self.request.POST.get( "print-contract", None )
	
			# print user list
			if do_print_users != None:
				users_persons = {}
				summ_billing = 0
				users = User.objects.all().order_by( 'last_name', "username" )
				persons = Person.objects.all()
				counter = 0
	
				for user in users:
					contracts = []
					contract_list = []
					contracts = Contract.objects.filter( contact = user )
	
					if persons:
						person_counter = 0
	
						for person in persons:
							if user == person.user:
								billing_persons = Billing_Contact.objects.filter( person = person )
								billing_type = None
								iban = None
								billing_type = None
	
								if billing_persons:
									for billing_person in billing_persons:
										if billing_person.billing_type:
											billing_type = billing_person.billing_type
										
										if billing_person.iban:
											iban = billing_person.iban
											
	
								if len( contracts ) > 0:
									for contract in contracts:
										try:
											contract_dic = model_to_dict( contract )
											type = contract.type.name
											price = contract.calc_price()
											contract_dic["type"] = type
											contract_dic["price"] = price
											summ_billing = summ_billing + price
											contract_list.append( contract_dic )
											
											if contract.billing_contact:
												contract_dic["billing_contact"] = contract.billing_contact.first_name + " " + contract.billing_contact.last_name
	
										except Exception as e:
											print ( e )
								person_dic = model_to_dict( person )
								person_dic["contracts"] = contract_list
								person_dic["billing_type"] = billing_type
								person_dic["iban"] = iban
								users_persons[user] = person_dic
	
								break
	
							person_counter = person_counter + 1
					else:
						users_persons[user] = user
					
					users_persons["summ_billing"] = summ_billing
					counter = counter + 1
			elif do_print_calendar != None:
				user_id = self.request.POST.get( "user", None )
				category = self.request.POST.get( "category", None )
	
				if user_id != None:
					user = User.objects.get( pk = user_id )
					today = datetime.now()
					calendar = {}
	
					if today.weekday() != 0:
						last_monday = today - timedelta( days = ( today.weekday() + 1 ) )
					else:
						last_monday = today - timedelta( days = 1 )
	
					if ( today.weekday() == 6 ):
						next_sunday = today
					else:
						days = 7 - ( today.weekday() + 1 )
						next_sunday = today + timedelta( days = days )
	
					if category == "user":
						events = Event.objects.filter( Q( date__gt = last_monday ) & Q( date__lt = next_sunday ) & Q( users = user ) ).order_by( "date" )
					else:
						events = Event.objects.filter( Q( date__gt = last_monday ) & Q( date__lt = next_sunday ) & Q( lead = user ) ).order_by( "date" )
	
					calendar["user"] = user
					calendar["last_monday"] = ( last_monday + timedelta( days = 1 ) )
					calendar["next_sunday"] = next_sunday
					calendar["events"] = events
				else:
					calendar = "nothing found"
	
			elif do_print_contract != None:
				contract_id = self.request.POST.get( "id_contract", None )
	
				if contract_id != None:
					contract = Contract.objects.get( pk = contract_id )
	
			elif date_from_post != None:
				date_from_post = datetime.strptime( date_from_post, '%d.%m.%Y' )
				events = Event.objects.filter( date__year = date_from_post.year, date__month = date_from_post.month, date__day = ( date_from_post.day ) ).order_by( 'lead', "start_time" )
				events_by_lead = {}
				former_lead = None
				lead_counter = 0
	
				for event in events:
	
					event_list = None
	
					if former_lead is None:
						former_lead = event.lead
						events_by_lead[lead_counter] = []
	
					if event.lead != former_lead:
						lead_counter = lead_counter + 1
						events_by_lead[lead_counter] = []
						event_list = events_by_lead[lead_counter]
					else:
						event_list = events_by_lead[lead_counter]
	
					if event_list is not None:
						event_list.append( event )
						events_by_lead[lead_counter] = event_list
	
					former_lead = event.lead
	
		context = self.requestContext( self.request, {
			"events_by_lead" : events_by_lead,
			"users_persons" : users_persons,
			"users"			: users,
			"calendar"		: calendar,
			"contracts"		: contracts,
			"contract"		: contract,
			"today"			: today,
		} )
	
		template = loader.get_template( 'base/print_events.html' )
	
		return HttpResponse( template.render( context ) )
