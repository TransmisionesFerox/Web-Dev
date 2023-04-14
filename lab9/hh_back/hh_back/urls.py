"""hh_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views import CompaniesList, CompanyDetail, VacancyCompanyList, VacancyList, VacancyDetail, TopTenVacancies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/', CompaniesList.as_view(), name='companies_list'),
    path('companies/<int:id>/', CompanyDetail.as_view(), name='company_detail'),
    path('companies/<int:id>/vacancies/',VacancyCompanyList.as_view(), name ='vacancies_company_list'),
    path('vacancies/', VacancyList.as_view(), name='vacancy_list'),
    path('vacancies/<int:id>/', VacancyDetail.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/',TopTenVacancies.as_view(), name='top_ten_vacancies'),
    path('api/', include('api.urls')),
]
