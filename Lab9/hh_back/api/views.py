from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacancy
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def all_companies(request):
    if request.method == "GET":
        company = Company.objects.all()
        companies = [c.to_json() for c in company]
        return JsonResponse(companies, safe=False)
@csrf_exempt
def all_vacancy(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
@csrf_exempt
def get_company(request, id):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist:
        return JsonResponse({'error':"Company by this id does not exist"}, status=400)
    if request.method == "GET":
        return JsonResponse(company.to_json())
@csrf_exempt
def get_vacancy(request,id):
    try:
        vacancy = Vacancy.objects.get(id = id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'message': "Vacancy by this id does not exist"}, status=400)
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_by_company(request,id):
    try:
        company = Company.objects.get(id = id)
        vacancies = company.vacancies.all()
        vacancies_json = [v.to_json() for v in vacancies]
    except Company.DoesNotExist:
        return JsonResponse({'message': "vacancy by this id does not exist"}, status=400)
    if request.method == "GET":
        return JsonResponse(vacancies_json, safe=False)
@csrf_exempt
def top_ten(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)