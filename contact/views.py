import os
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from .serializers import ContactSerializer

# Create your views here.

class Contact(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            email = data.get('email')
            content = {
                "name": data.get('name'),
                "phone_number": data.get('phone_number'),
                "email": email,
                "subject": data.get('subject'),
                "message": data.get('message'),
            }

            html_message = render_to_string("contact.html", {
                "content": content
            })
            stripped_message = strip_tags(html_message)
            send_mail(
                subject="Contact form Submission",
                message=stripped_message,
                html_message=html_message,
                from_email=email,
                recipient_list=[os.environ.get("EMAIL_USERNAME"),],
                fail_silently=False
            )
            return Response({"status": "Message sent."}, status=status.HTTP_200_OK)
        return Response(
            {
                "status": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )
