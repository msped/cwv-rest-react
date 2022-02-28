from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import invoice_handler

# Create your views here.

class InvoiceGeneration(APIView):
    def post(self, request, *args, **kwargs):
        email = invoice_handler(request.data)
        return Response(
            {f"Invoice sent by email to {email}."},
            status=status.HTTP_200_OK
        )
