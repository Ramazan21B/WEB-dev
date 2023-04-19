from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.all_companies.as_view()),
    path('companies/<int:pk>/', views.one_company.as_view()),
    path('companies/<int:id>/vacancies/', views.vacancies_by_company.as_view()),
    path('vacancies/', views.all_vacancies.as_view()),
    path('vacancies/<int:id>/', views.one_company.as_view()),
    path('vacancies/top_ten/', views.top_ten.as_view())
]

