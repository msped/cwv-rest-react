import os
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.db.models import Q
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Vehicle
from .serializers import VehicleSerializer, VehicleStateSerializer

# Create your views here.

class ListVehicles(ListAPIView):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.filter(Q(reserved='1') | Q(reserved='2'))

class VehicleDetail(RetrieveAPIView):
    serializer_class = VehicleSerializer
    lookup_field = "id"
    lookup_url_kwarg = "vehicle_id"
    queryset = Vehicle.objects.all()

class VehicleState(RetrieveAPIView):
    serializer_class = VehicleStateSerializer
    lookup_field = "id"
    lookup_url_kwarg = "vehicle_id"
    queryset = Vehicle.objects.filter(reserved="1")

class SendReservation(APIView):
    def post(self, request, vehicle_id):
        vehicle = get_object_or_404(Vehicle, id=vehicle_id)
        vehicle.reserved = "2"
        vehicle.save()
        content = {
            "name": request.data["name"],
            "email": request.data["email"],
            "phone_number": request.data["phone_number"],
        }
        if request.data.get("trade-in", False):
            make = request.data.get("make")
            model = request.data.get("model")
            trim = request.data.get("trim")
            year = request.data.get("year")
            mileage = request.data.get("mileage")
            comments = request.data.get("comments")
            content.update({
                "make": make,
                "model": model,
                "trim": trim,
                "year": year,
                "mileage": mileage,
                "comments": comments
            })

        html_message = render_to_string("reservation.html", {
            "content": content
        })
        stripped_message = strip_tags(html_message)
        send_mail(
            subject=f"Reservation of {vehicle.make} {vehicle.model} {vehicle.trim}",
            message=stripped_message,
            html_message=html_message,
            from_email=request.data["email"],
            recipient_list=[os.environ.get("EMAIL_USERNAME"),],
            fail_silently=False
        )
        return Response(
            {f"Reservation of {vehicle.make} {vehicle.model} {vehicle.trim} has been sent."},
            status=status.HTTP_200_OK
        )
