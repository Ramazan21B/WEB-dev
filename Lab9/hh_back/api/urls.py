from django.urls import path
from . import views

urlpatterns = [
    path('company/', views.all_companies),
    path('company/<int:id>/', views.get_company),
    path('company/<int:id>/vacancies/', views.vacancy_by_company),
    path('vacancies/', views.all_vacancy),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.top_ten)
]