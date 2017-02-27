from rest_framework import viewsets, status
from rest_framework.response import Response

from _calendar._serializer import EventSerializer
from _calendar.models import Event

class EventViews( viewsets.ModelViewSet ):
    lookup_field = 'username'
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions( self ):
        pass

    def create( self, request ):
        serializer = self.serializer_class( data = request.data )

        if serializer.is_valid():
            Event.objects.create( **serializer.validated_data )

            return Response( serializer.validated_data, status = status.HTTP_201_CREATED )

        return Response( {
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status = status.HTTP_400_BAD_REQUEST )
