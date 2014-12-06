from django.conf.urls import patterns, url
from _security.views import handle_control_panel
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
	url(r'^handle_control_panel/$', handle_control_panel, name='handle_control_panel'),
) 
