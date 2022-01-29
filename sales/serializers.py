from rest_framework import serializers
from .models import Vehicle, VehicleImages

class VehicleImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleImages
        fields = [
            'id',
            'vehicle',
            'image',
            'is_main'
        ]

class VehicleSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    def get_images(self, obj):
        images = VehicleImages.objects.filter(vehicle_id=obj.id)
        serializer = VehicleImagesSerializer(images, many=True)
        return serializer.data

    class Meta:
        model = Vehicle
        fields = [
            'id',
            'slug',
            'make',
            'model',
            'trim',
            'year',
            'fuel',
            'body_type',
            'car_state',
            'reserved',
            'mileage',
            'engine_size',
            'mot_expiry',
            'extras',
            'price',
            'images'
        ]

class VehicleStateSerializer(serializers.ModelSerializer):
    state = serializers.CharField(
        source="get_car_state_display"
    )

    class Meta:
        model = Vehicle
        fields = ['id', 'state']
