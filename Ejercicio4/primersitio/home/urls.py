from django.urls.resolvers import URLPattern
from django.urls import path
from . import views

urlpatterns = [
    path('primerview/', views.primerView, name='home'),
    path('leap/', views.leapYear, name='leap'),
    path('users/', views.users, name='users')
    ]