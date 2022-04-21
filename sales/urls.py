from django.urls import path
from .views import ListVehicles, VehicleDetail, VehicleState, SendReservation

urlpatterns = [
    path("", ListVehicles.as_view(), name="vehicle_list"),
    path("<str:slug>/", VehicleDetail.as_view(), name="vehicle_detail"),
    path("state/<int:vehicle_id>/", VehicleState.as_view(), name="vehicle_state"),
    path("reserve/<int:vehicle_id>/", SendReservation.as_view(), name="send_reservation"),
]
