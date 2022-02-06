from rest_framework import serializers
from .models import GalleryImage, GalleryItem

class GalleryImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = [
            "id",
            "item",
            "image",
            "is_main"
        ]

class GalleryItemSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    def get_images(self, obj):
        images = GalleryImage.objects.filter(item_id=obj.id)
        serializer = GalleryImagesSerializer(images, many=True)
        return serializer.data

    class Meta:
        model = GalleryItem
        fields = [
            "id",
            "slug",
            "make",
            "model",
            "trim",
            "year",
            "power",
            "description",
            "images"
        ]
