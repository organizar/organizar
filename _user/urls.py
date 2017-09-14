from django.conf.urls import patterns, url
from _user import views
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns(
    url( r'^api/users/$', views.all_users, name = "all_users_" ),
    url( r'^api/users/(?P<from_date>.*)/(?P<to_date>.*)/$', views.all_users, name = "all_users_from_to" ),
    url( r'^api/users/$', views.all_users, name = "all_users_from_to2" ),
    url( r'^api/user/(?P<id>.*)/$', views.edit_user, name = "edit_user" ),
)
