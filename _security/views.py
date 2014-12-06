from django.http import HttpResponse
from django.template import RequestContext, loader
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from _calendar.models import Event
from _billing.models import Contract

@login_required(login_url='/')
def handle_control_panel(request):
	template = loader.get_template('_security/control_panel.html')	
	all_users = User.objects.all()
	all_events = Event.objects.all()
	all_contracts = Contract.objects.all()
	

	context = RequestContext(request, {
		'all_users': all_users,
		'all_events': all_events,
		'all_contracts' : all_contracts,
	})

	return HttpResponse(template.render(context))
