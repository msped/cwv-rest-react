from django.urls import path
from .views import ListVehicles, VehicleDetail

urlpatterns = [
    path('', ListVehicles.as_view(), name=""),
    path('/<int:vehicle_id>', VehicleDetail.as_view(), name="vehicle_detail")
]
