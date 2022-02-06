from rest_framework.generics import ListAPIView, RetrieveAPIView

from gallery.serializers import GalleryItemSerializer
from .models import GalleryItem

# Create your views here.

class Gallery(ListAPIView):
    serializer_class = GalleryItemSerializer
    queryset = GalleryItem.objects.all()

class GalleryDetail(RetrieveAPIView):
    serializer_class = GalleryItemSerializer
    lookup_field = "id"
    lookup_url_kwarg = "gallery_id"
    queryset = GalleryItem.objects.all()
