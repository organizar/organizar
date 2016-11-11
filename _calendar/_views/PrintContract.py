# coding=UTF-8
from datetime import datetime
import traceback

from django.conf import settings
from django.http.response import HttpResponse
from django.template.context import Context
from django.template.loader import get_template
from xhtml2pdf import pisa

from _billing.models import Contract
from _ui.BaseView import BaseView


#####################################################################
# 																	#
# AUTHOR		: robert.eisele@organizar.de			 			#
# YEAR			: 2016						  						#
# COPYRIGHT BY	: organizar gbr					  					#
# 								  									#
#####################################################################
class PrintContractView( BaseView ):

	def render( self, contract_id ):
		contract = None

		if contract_id != None:
			contract = Contract.objects.get( id = contract_id )
	
		filename = datetime.now().strftime( "%Y%m%d%M%S" )

		if contract != None:
			filename += "_" + contract.number
			filename += "_" + contract.contact.last_name + "_" + contract.contact.first_name
	
		filename += '.pdf'
	
		# Prepare context
		context = {
			"contract"		: contract,
			"today"			: datetime.now().strftime( "%d.%m.%Y" ),
		}
	
		# Render html content through html template with context
		template = get_template( settings.APP_ROOT + "/templates/base/print_contract.html" )
		html = template.render( Context( context ) )
		return super( PrintContractView, self ).render_pdf( html, filename )
