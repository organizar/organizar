from django import forms

class BaseForm( forms.Form ):
	your_name = forms.CharField( label = 'Your name', max_length = 100 )
	class Meta:
		name = ""
