from rest_framework.generics import ListAPIView, RetrieveAPIView

from gallery.serializers import GalleryItemSerializer
from .models import GalleryItem

# Create your views here.

class Gallery(ListAPIView):
    serializer_class = GalleryItemSerializer
    queryset = GalleryItem.objects.all()
