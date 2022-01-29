from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Vehicle
from .serializers import VehicleSerializer

# Create your views here.

class ListVehicles(ListAPIView):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()

class VehicleDetail(RetrieveAPIView):
    serializer_class = VehicleSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'vehicle_id'
    queryset = Vehicle.objects.all()
    