# coding=UTF-8
from django import forms
from _billing.models import Contract, Contract_Type
from django.contrib.auth.models import User
from django.forms import ModelForm


class Contract_Form(ModelForm):
	number = forms.CharField(widget=forms.HiddenInput)
	class Meta:
		model = Contract
		exclude = []

class Contract_Type_Form(ModelForm):

	class Meta:
		model = Contract_Type
		exclude = []
