from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.shortcuts import Http404
from Lab10.hh_back.api.models import Company, Vacancy
from Lab10.hh_back.api.serializers import CompanySerializer, VacancySerializer

class all_companies(APIView):
    def get(self,request):
        company = Company.objects.all()
        serializer = CompanySerializer(company,many=True)
        return Response(serializer)
    def post(self,request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=400)
class one_company(APIView):
    def get_object(self,request,pk):
        try:
            return Company.objects.get(id = pk)
        except Company.DoesNotExits:
            raise Http404
    def get(self, request, pk):
        company = Company.objects.get(id = pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    def put(self,request,pk):
        company = self.get_object(self, pk)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    def delete(self,request,pk):
        company = self.get_object(self, pk)
        company.delete()
        return Response({'deleted': True})
class all_vacancy(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.all()
        serializer = CompanySerializer(vacancies,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
class top_ten(APIView):
    def get(self,request):
        vacancy = Vacancy.objects.order_by("-salary")[:10]
        serializer = CompanySerializer(vacancy, many=True)
        return Response(serializer.data)
class one_vacancy(APIView):
    def get_object(self, request, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Company.DoesNotExits:
            raise Http404

    def get(self, request, pk):
        vacancy = Vacancy.objects.get(id=pk)
        serializer = CompanySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy= self.get_object(self, pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        vacancy = self.get_object(self, pk)
        vacancy.delete()
        return Response({'deleted': True})