from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

class TestAuthentication(APITestCase):

    def setUp(self):
        get_user_model().objects.create_user(
            username="test",
            email="matt@mspe.me",
            password="5up3R!98"
        )

    def test_request_access_token(self):
        response = self.client.post(
            '/api/auth/token',
            {
                'username': 'test',
                'email': 'matt@mspe.me',
                'password': '5up3R!98'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_request_refresh_token(self):
        access_request = self.client.post(
            '/api/auth/token',
            {
                'username': 'test',
                'email': 'matt@mspe.me',
                'password': '5up3R!98'
            },
            format='json'
        )
        refresh_token = access_request.data['refresh']
        response = self.client.post(
            '/api/auth/token/refresh',
            {
                'refresh': refresh_token
            },
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
