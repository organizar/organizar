# coding=UTF-8

from datetime import datetime, timedelta
import gc
import json
import sys
import time
import traceback

from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect
from django.template import RequestContext, loader
from django.utils.dateformat import DateFormat

from _calendar.models import Event, Event_Person_Comment, Not_At_Event_Person
from _user.models import Person


@login_required( login_url = '/' )
def logout_user( request = None ):
    if request.user:
        logout( request )
    return HttpResponseRedirect( '/' )

@login_required( login_url = '/' )
def load_mail_menu( request = None, message = "" ):

    context = RequestContext( request, {
        "message" : message,
    } )

    template = loader.get_template( 'base/content/mail.html' )

    return HttpResponse( template.render( context ) )

@login_required( login_url = '/' )
def send_a_mail( request = None ):
    load = request.POST.get( "load", "" )
    data = get_data_for_mail( load )
    html = str( data )
    impressum = "\n\n\n\n" + "Bildungszentrum Rheinfelden \n" + "Pauline Lewens \n" + "Karl-Fürstenberg-Str. 13 \n" + "79618 Rheinfelden \n\n" + "T: 0049 (0)7623 6808 \n" + "E: info@bildungszentrum-rheinfelden.de \n\n" 
    
    html = html + impressum
    
    try:
        send_mail( 'Überbelegte Stunden', html, 'Bildungszentrum Rheinfelden <info@bildungszentrum-rheinfelden.de>',
        ['robert.eisele@tlsdp.com'], fail_silently = False )
        message = "Sie haben erfolgreich die Überbelegten Stunden angefragt. \n Sie sollten nun eine E-Mail erhalten haben."
    except:
        message = "Leider hat da etwas nicht funktioniert... \n Bitte versuchen Sie es noch einmal und wenn der Fehler wieder auftritt, wenden Sie sich an den technischen Support. \n\n\n\n " + str( traceback.print_exc() ) + ""
        traceback.print_exc()

    return load_mail_menu( request, message )

def get_data_for_mail( load ):
    result = None

    if ( load == "overloaded_events" ):
        events = Event.objects.all()
        overloaded_events = []
        text = "==================== Überbelegte Stunden ==================== \n\n"
        tmp_text = ""
        i = 0
        n = 0

        for event in events:
            try:
                a = event
                b = events[( i + 1 )]
    
                if ( a.room == b.room and 
                    ( ( a.start_time <= b.start_time and a.end_time > b.start_time ) or 
                    ( a.start_time < b.end_time and a.end_time >= b.end_time ) ) ):

                    f_a_date = DateFormat( a.date )
                    f_b_date = DateFormat( b.date )
                    date_is_equal = f_a_date.format( "d.m.Y" ) == f_b_date.format( "d.m.Y" )
                    lead_exists = a.lead and b.lead

                    if ( lead_exists and date_is_equal ):
                        tmp_text = tmp_text + " - " + str( f_a_date.format( "d.m.Y" ) ) + " um " + a.start_time.strftime( "%H:%M" ) + " im: " + str( a.room ) + " " + str( a.lead.last_name ) + " " + str( a.lead.first_name ) + " und " + str( b.lead.last_name ) + " " + str( b.lead.first_name ) + "\n"
                        n = n + 1
            except:
                traceback.print_exc()
            i = i + 1

        text = text + " Es wurden " + str( n ) + " Konflikte entdeckt! \n\n\n"
        text = text + tmp_text
        text = text + "\n\n=============================================================\n\n"
        result = text

    return result
