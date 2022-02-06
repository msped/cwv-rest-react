import json
import shutil
import tempfile

from django.test import override_settings
from rest_framework.test import APITestCase
from rest_framework import status
from .models import GalleryImage, GalleryItem

MEDIA_ROOT = tempfile.mkdtemp()

@override_settings(MEDIA_ROOT=MEDIA_ROOT)

# Create your tests here.

class TestGalleryView(APITestCase):

    def setUp(self):
        g_1 = GalleryItem.objects.create(
            slug="test",
            make="Mercedes",
            model="A Class",
            trim="A250",
            year="2013",
            power="350",
            description="loads of stuff"
        )
        g_1.save()

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(MEDIA_ROOT, ignore_errors=True)
        super().tearDownClass()

    def test_gallery_list(self):
        response = self.client.get('/api/gallery/')
        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK
        )
        self.assertEqual(
            json.loads(response.content),
            {
                'count': 1,
                'next': None,
                'previous': None,
                'results': [
                    {
                        'id': 2,
                        'slug': 'test',
                        'make': 'Mercedes',
                        'model': 'A Class',
                        'trim': 'A250',
                        'year': 2013,
                        'power': 350,
                        'description':
                        'loads of stuff',
                        'images': []
                    }
                ]
            }
        )

    def test_gallery_detail(self):
        response = self.client.get('/api/gallery/1/')
        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK
        )
        self.assertEqual(
            json.loads(response.content),
            {
                'id': 1,
                'slug': 'test',
                'make': 'Mercedes',
                'model': 'A Class',
                'trim': 'A250',
                'year': 2013,
                'power': 350,
                'description':
                'loads of stuff',
                'images': []
            }
        )
