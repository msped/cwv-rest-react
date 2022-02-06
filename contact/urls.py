from django.urls import path
from .views import Contact

urlpatterns = [
    path('', Contact.as_view(), name="send_contact_form"),
]