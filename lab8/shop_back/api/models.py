from django.db import models

class Product:
    name = models.CharField(max_length=200, db_index=True, verbose_name='Наменование')
    price = models.FloatField(max_digits=15, decimal_places=2, verbose_name='Цена')
    description = models.TextField(blank=True, verbose_name='Описание')
    count = models.IntegerField()
    is_active = models.BooleanField()

class Category:
    name = models.CharField(max_length=200, db_index=True, verbose_name='Наменование')
# Create your models here.
