from django.shortcuts import render
from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompaniesList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class VacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = CategorySerializer

class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class VacancyCompanyList(generics.ListAPIView):
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        id = self.kwargs.get(self.lookup_url_kwarg)
        return Company.objects.filter(category__id=id)

# Create your views here.
