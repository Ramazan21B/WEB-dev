from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
def product_get(request,id):
    products = Product.objects.get(id = id)
    products_json = products.to_json()
    return JsonResponse(products_json,safe=False)
def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json for c in categories]
    return JsonResponse(categories_json, safe=False)
def category_get(request,id):
    categories = Category.objects.get(id = id)
    categories_json = categories.to_json()
    return JsonResponse(categories_json, safe=False)
def category_product(request,id):
    category = Category.objects.get(id = id)
    products = Product.objects.filter(category = category.name)
    products_category_json = [p.to_json for p in products]
    return JsonResponse(products_category_json, safe=False)