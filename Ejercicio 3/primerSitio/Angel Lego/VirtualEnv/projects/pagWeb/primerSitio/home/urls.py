from django.urls.resolvers import URLPattern
from django.urls import path
from . import views 

urlpatterns = [
    path('', views.primerView, name='home'),
    path('Hola Mundo/', views.views.leap_year, name='leap'),
]
