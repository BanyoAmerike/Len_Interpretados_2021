from django.urls.resolvers import URLPattern
from django.urls import path
from . import views 

urlpatterns = [
    path('', views.primerView, name='home'),
    path('leap/', views.leap_year, name='leap'),
]
