from django.conf.urls import patterns, url
from django.contrib import admin

from _utils.views import  send_a_mail, load_mail_menu, logout_user


# 	from _utils.models import HelloWorld
admin.autodiscover()

urlpatterns = patterns( '',
    url( r'^send_mail/$', send_a_mail, name = 'send_mail' ),
    url( r'^load_mail_menu/$', load_mail_menu, name = 'load_mail_menu' ),

    # url(r'^hello/$', HelloWorld.as_view())
    url( r'^logout/$', logout_user, name = 'logout_user' ),
 )
