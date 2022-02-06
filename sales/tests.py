import io
import json
import shutil
import tempfile

from django.test import override_settings
from rest_framework.test import APITestCase
from rest_framework import status
from PIL import Image
from .models import Vehicle, VehicleImages

MEDIA_ROOT = tempfile.mkdtemp()

@override_settings(MEDIA_ROOT=MEDIA_ROOT)

class TestView(APITestCase):

    # def generate_photo_file(self, file_name):
    #     file = io.BytesIO()
    #     image = Image.new("RGBA", size=(100, 100), color=(155, 0, 0))
    #     image.save(file, "png")
    #     file.name = f"{file_name}.png"
    #     file.seek(0)
    #     return file

    def setUp(self):
        v_1 = Vehicle.objects.create(
            slug="mercedes-a-class-a250",
            make="Mercedes",
            model="A Class",
            trim="A250",
            year=2013,
            fuel="1",
            body_type="2",
            car_state="2",
            reserved="1",
            mileage=73500,
            engine_size=1991,
            mot_expiry="2022-09-01",
            extras="Test",
            price=16110.00
        )
        v_1.save()

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(MEDIA_ROOT, ignore_errors=True)
        super().tearDownClass()

    def test_get_list_of_vehicles(self):
        response = self.client.get("/api/sales/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            json.loads(response.content),
            {
                "count": 1,
                "next": None,
                "previous": None,
                "results": [
                    {
                        "id": 1,
                        "slug": "mercedes-a-class-a250",
                        "make": "Mercedes",
                        "model": "A Class",
                        "trim": "A250",
                        "year": 2013,
                        "fuel": "Petrol",
                        "body_type": "Hatchback",
                        "car_state": "Frontline",
                        "reserved": "For Sale",
                        "mileage": 73500,
                        "engine_size": 1991,
                        "mot_expiry": "2022-09-01",
                        "extras": "Test",
                        "price": "16110.00",
                        "images": []
                    }
                ]
            }
        )

    def test_get_vehicle_detail(self):
        response = self.client.get("/api/sales/2/")
        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK
        )
        self.assertEqual(
            json.loads(response.content),
            {
                "id": 2,
                "slug": "mercedes-a-class-a250",
                "make": "Mercedes",
                "model": "A Class",
                "trim": "A250",
                "year": 2013,
                "fuel": "Petrol",
                "body_type": "Hatchback",
                "car_state": "Frontline",
                "reserved": "For Sale",
                "mileage": 73500,
                "engine_size": 1991,
                "mot_expiry": "2022-09-01",
                "extras": "Test",
                "price": "16110.00",
                "images": []
            }
        )

    def test_reserve_vehicle(self):
        response = self.client.post(
            "/api/sales/reserve/3/",
            {
                "name": "John Doe",
                "email": "test@gmail.com",
                "phone_number": "07123456789"
            }
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            json.loads(response.content),
            ["Reservation of Mercedes A Class A250 has been sent."]
        )

    # def test_check_car_state(self):
    #     response = self.client.get("/api/sales/state/4/")
    #     self.assertEqual(
    #         response.status_code,
    #         status.HTTP_200_OK
    #     )
    #     self.assertEqual(
    #         json.loads(response.content),
    #         {
    #             "id": 4,
    #             "reserved": "For Sale"
    #         }
    #     )
