from django.contrib import admin
from .models import GalleryImage, GalleryItem

# Register your models here.

class GalleryImagesInlineAdmin(admin.TabularInline):
    model = GalleryImage

@admin.register(GalleryItem)
class GalleryAdmin(admin.ModelAdmin):
    inlines = [GalleryImagesInlineAdmin]
    prepopulated_fields = {'slug': ('make', 'model', 'trim', 'power')}

    class Meta:
        model = GalleryItem

@admin.register(GalleryImage)
class GalleryImagesAdmin(admin.ModelAdmin):
    pass
