# Generated by Django 4.0.1 on 2022-02-06 00:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='vehicle',
            options={'ordering': ['-id']},
        ),
    ]
