from django.urls import path
from .views import Gallery, GalleryDetail

urlpatterns = [
    path('', Gallery.as_view(), name="gallery_view"),
    path('<int:gallery_id>/', GalleryDetail.as_view(), name="gallery_detail_view"),
]
