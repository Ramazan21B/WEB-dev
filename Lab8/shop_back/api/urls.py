from django.urls import path, include
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_get),
    path('category/', views.category_list),
    path('category/<int:id>/', views.category_get),
    path('category/<int:id>/products/', views.category_product),
]