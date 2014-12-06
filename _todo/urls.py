from django.conf.urls import patterns, include, url
from _todo.views import handle_todo, task_control, delete_todo
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
	url(r'^task_control/$', task_control, name='task_control'),
	url(r'^handle_todo/$', handle_todo, name='handle_todo'),
	url(r'^handle_todo/(?P<todo_id>.*)/$', handle_todo, name='handle_todo'),
	url(r'^delete_todo/(?P<todo_id>.*)/$', delete_todo, name='delete_todo'),
) 
