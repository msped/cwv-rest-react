from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField()
    phone_number = PhoneNumberField()
    email = serializers.EmailField()
    subject = serializers.CharField()
    message = serializers.CharField()
