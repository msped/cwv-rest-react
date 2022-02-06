from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sales/', include('sales.urls'), name="sales"),
    path('api/gallery/', include('gallery.urls'), name="gallery"),
]
