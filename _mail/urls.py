from django.conf.urls import url
from _mail import views 

urlpatterns = [ 
  # The home view ('/tutorial/') 
  url(r'^m/$', views.home, name='home'), 
  # Explicit home ('/tutorial/home/') 
  url(r'^m/home/$', views.home, name='home'), 
  # Redirect to get token ('/tutorial/gettoken/')
  url(r'^m/gettoken/$', views.gettoken, name='gettoken'),
  # Mail view ('/tutorial/mail/')
  url(r'^m/mail/$', views.mail, name='mail'),
]

