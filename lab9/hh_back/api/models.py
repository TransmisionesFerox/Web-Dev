from django.db import models

class Company:
    name = models.CharField(max_length=200, db_index=True, verbose_name='Наменование')
    description = models.TextField(blank=True, verbose_name='Описание')
    city = models.CharField()
    address = models.TextField()

class Vacancy:
    name = models.CharField(max_length=200, db_index=True, verbose_name='Наменование')
    description = models.TextField(blank=True, verbose_name='Описание')
    salary = models.FloatField()
    company = models.ForeignKey()
# Create your models here.
