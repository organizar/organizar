from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from _mail.authhelper import get_signin_url
from _mail.authhelper import get_signin_url, get_token_from_code, get_access_token
from _mail.outlookservice import get_me, get_my_messages

# Create your views here.

def home(request):
  redirect_uri = request.build_absolute_uri(reverse('_mail:gettoken'))
  sign_in_url = get_signin_url(redirect_uri)
  return HttpResponse('<a href="' + sign_in_url +'">Click here to sign in and view your mail</a>')

def gettoken(request):
  auth_code = request.GET['code']
  redirect_uri = request.build_absolute_uri(reverse('_mail:gettoken'))
  token = get_token_from_code(auth_code, redirect_uri)
  print(token)
  access_token = token['access_token']
  user_email = "eisele.robert@gmail.com"#get_user_email_from_id_token(token['id_token'])

  # Save the token in the session
  request.session['access_token'] = access_token
  request.session['user_email'] = user_email
  return HttpResponseRedirect(reverse('_mail:mail'))


def mail(request):
  access_token = get_access_token(request, request.build_absolute_uri(reverse('_mail:gettoken')))
  user_email = request.session['user_email']
  # If there is no token in the session, redirect to home
  if not access_token:
    return HttpResponseRedirect(reverse('tutorial:home'))
  else:
    messages = get_my_messages(access_token, user_email)
    context = { 'messages': messages['value'] }
    return render(request, 'tutorial/mail.html', context)
