from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Vehicle
from .serializers import VehicleSerializer

# Create your views here.

class ListVehicles(ListAPIView):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
