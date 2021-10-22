from django.urls.resolvers import URLPattern
from django.urls import path
from . import views

urlpatterns = [
    path('olitademar/', views.primerView, name='Home'),
    path('leap/', views.leapYear, name='leap'),
    path('users/', views.users, name='users')
    ]
