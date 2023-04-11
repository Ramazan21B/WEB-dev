from django.contrib import admin
from .models import Company, Vacancy
# Register your models here.

@admin.register(Company)
class Companyadmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'city', 'address')

@admin.register(Vacancy)
class Vacancyadmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'salary', 'company')
    list_filter = ['company']