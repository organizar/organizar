from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin
#from rest_framework.routers import SimpleRouter

from _calendar import views
from _calendar._views import EventViews
from _user.views import handle_user


admin.autodiscover()


#router = SimpleRouter()
#router.register( r'accounts', EventViews )

urlpatterns = patterns( '',
					
					
					
	#url( r'^api/v1/', include( router.urls ) ),

	url( r'^$', views.index, name = 'index' ),
	url( r'^calendar/$', views.placeholder, name = 'placeholder' ),
	url( r'^calendar$', views.placeholder, name = 'placeholder' ),
	
	url( r'^data/(?P<key>.*)/(?P<action>.*)/$', views.serve_data, name = 'serve_data' ),
	url( r'^data/$', views.serve_data, name = 'placeholder' ),
	
	url( r'^event/(?P<event_id>.*)/(?P<action>.*)/$', views.placeholder, name = 'edit event' ),
	
	url( r'^person/new/(?P<user_id>.*)/$', handle_user, name = 'new person' ),
	url( r'^person/edit/(?P<user_id>.*)/$', handle_user, name = 'edit person' ),
	url( r'^person/save/(?P<user_id>.*)/$', handle_user, name = 'save person' ),
	
	url( r'^user/new/$', handle_user, name = 'new user' ),
	url( r'^user/edit/(?P<user_id>.*)/$', handle_user, name = 'edit user' ),
	url( r'^user/save/(?P<user_id>.*)/$', handle_user, name = 'save user' ),
	
	url( r'^sync_events/$', views.sync_events, name = 'sync events' ),
	
	url( r'^print_events/$', views.print_events, name = 'print_events' ),
	url( r'^print_contract/$', views.print_contract, name = 'print_contract' ),
	url( r'^print_contract/(?P<contract_id>.*)/$', views.print_contract, name = 'print_contract' ),
	
	url( r'^print/$', views.print_events, name = 'print_events' ),
	
	url( r'^contract_list/$', views.contract_list, name = 'contract_list' ),
	
	
	url( r'^delete/group/(?P<group_id>.*)/$', views.delete_group, name = 'delete_group' ),
	url( r'^edit/group/(?P<group_id>.*)/(?P<event_id>.*)/$', views.edit_group, name = 'edit_group' ),
	
	url( r'^move_events_in_future/$', views.move_dates_one_day_into_the_future, name = 'move_dates_one_day_into_the_future' ),
	
	
	url( r'^add_user_comment/(?P<event_id>.*)/(?P<user_id>.*)/$', views.add_user_comment, name = 'add_user_comment' ),
	
	url( r'^user_not_participating/(?P<event_id>.*)/(?P<user_id>.*)/$', views.user_not_participating, name = 'user_not_participating' ),

	url( r'^add/event_group/(?P<event_id>.*)/$', views.handle_event_group, name = 'add event groups' ),
	url( r'^edit/event_group/(?P<event_id>.*)/(?P<event_group_id>.*)/$', views.handle_event_group, name = 'edit event groups' ),

	url( r'^static/(?P<path>.*)$', 'django.ui.static.serve', {'document_root': settings.STATIC_ROOT } ),
	url( r'^forms$', views.calendar, name = 'forms' ),
	url( r'^forms/.*$', views.forms, name = 'forms' ),

	url( r"^billing/", include( '_billing.urls', namespace = "_billing" ) ),
	url( r"^hours/$", views.print_hours, name = "hours" ),
	url( r'^hours/(?P<user_id>.*)/$', views.print_hours, name = "hours_uid" ),
	url( r'^hours/(?P<user_id>.*)/(?P<from_date>.*)/(?P<to_date>.*)/$', views.print_hours, name = "hours_all" ),
	
	
	
	# url(r'^handle/event/?$', ui.EventCRUDView.as_view(), name='event_crud_view'),
 ) 
