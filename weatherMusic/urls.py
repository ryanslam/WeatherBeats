from django.urls import path
from . import views

urlpatterns = [
    path('', views.weatherTest),
    path('winter', views.winter),
]