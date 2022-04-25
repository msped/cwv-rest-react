from rest_framework.generics import ListAPIView, RetrieveAPIView

from gallery.serializers import GalleryItemSerializer, GalleryItemListSerializer
from .models import GalleryItem

# Create your views here.

class Gallery(ListAPIView):
    serializer_class = GalleryItemListSerializer
    queryset = GalleryItem.objects.all()

class GalleryDetail(RetrieveAPIView):
    serializer_class = GalleryItemSerializer
    lookup_field = "slug"
    lookup_url_kwarg = "slug"
    queryset = GalleryItem.objects.all()
