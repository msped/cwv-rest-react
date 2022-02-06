import json
from rest_framework.test import APITestCase
from rest_framework import status

class TestContactApp(APITestCase):

    def test_contact_post_working(self):
        response = self.client.post(
            '/api/contact/',
            {
                "name": "John Smith",
                "phone_number": "07123456789",
                "email": "test@mspe.me",
                "subject": "Test email",
                "message": "Test message for admin"
            }
        )
        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK
        )
        self.assertEqual(
            json.loads(response.content),
            {
                'status': 'Message sent.'
            }
        )

    def test_contact_post_fail(self):
        response = self.client.post(
            '/api/contact/',
            {
                "name": "John Smith",
                "phone_number": "07123456789",
                "email": "test!mspe.me",
                "subject": "Test email",
                "message": "Test message for admin"
            }
        )
        self.assertEqual(
            response.status_code,
            status.HTTP_400_BAD_REQUEST
        )
        self.assertEqual(
            json.loads(response.content),
            {
                'status': {
                    "email": ["Enter a valid email address."]
                }
            }
        )
