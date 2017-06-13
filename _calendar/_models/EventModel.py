from _calendar.models import Event


class EventModel:
	event = None

	def __init__( self, event ):
		self.event = event

	fields = fields = [( f.verbose_name, f.name ) for f in Event._meta.fields]

	def create_event( self, **kwargs ):
		pass

	def get_event( self, **kwargs ):
		pass

	def update_event( self, **kwargs ):
		pass

	def delete_event( self, **kwargs ):
		pass
