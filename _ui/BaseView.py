





from datetime import datetime
import traceback

from django.http.response import HttpResponse
from xhtml2pdf import pisa

from easyERP_LIVE import settings
from utils.TimeUtils import Watch


class BaseView( object ):
	request = None
	current_user = None
	
	PDF_CNT_TYPE = 'application/pdf'
	
	template = "/base/nosite.html"
	
	def __init__( self, request ):
		self.request = request


	def render( self, iterable ):
		return


	def render_pdf( self, html, filename = None ):
		response = HttpResponse( content_type = self.PDF_CNT_TYPE )

		w = Watch( "BaseView.render_pdf" )
		w.start()

		if filename == None:
			filename = datetime.now().strftime( "%Y%m%d" ) + '-export.pdf'

		pdf_path = settings.MEDIA_ROOT + '/pdf/contracts/' + filename
		pdf_file = open( pdf_path, "w+b" )

		try:
			pisa.CreatePDF( html, dest = pdf_file )
		except Exception as e	:
			print ( traceback.format_exc() )

		pdf_file.seek( 0 )
		pdf = pdf_file.read()
		pdf_file.close()

		response['Content-Disposition'] = filename
		response["Cache-Control"] = "max-age=0"
		response["Accept-Ranges"] = "none"
		response.content = pdf

		print( "Rendering PDF took :" )
		print( w.display() )

		return response

	def is_superuser( self ):
		is_superuser = False

		if self.current_user == None:
			self.current_user = self.request.user
			is_superuser = self.current_user.is_superuser

		return is_superuser
	
