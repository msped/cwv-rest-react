from django.urls import path
from .views import ListVehicles, VehicleDetail, VehicleState

urlpatterns = [
    path('', ListVehicles.as_view(), name="vehicle_list"),
    path('/<int:vehicle_id>', VehicleDetail.as_view(), name="vehicle_detail"),
    path('/state/<int:vehicle_id>', VehicleState.as_view(), name="vehicle_state"),
]
