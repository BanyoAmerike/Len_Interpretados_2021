from django.urls.resolvers import URLPattern
from django.urls import path
from . import views

urlpatterns = [
    path('bienvenido/', views.login, name='login')
    ]