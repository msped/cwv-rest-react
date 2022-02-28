from django.urls import path
from .views import InvoiceGeneration

urlpatterns = [
    path('invoice/', InvoiceGeneration.as_view(), name="invoice-generator"),
]
