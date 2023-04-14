from django.db import models

class Company:
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    city = models.CharField()
    address = models.TextField()

    def to_json(self):
        return{
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy:
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    salary = models.FloatField(default=1000)
    company = models.ForeignKey()

    def to_json(self):
        return{
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company
        }
# Create your models here.
