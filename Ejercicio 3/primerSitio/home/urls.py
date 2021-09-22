from django.urls.resolvers import URLPattern
from django.urls import path
from . import views 

urlpattern = [
    path('', views.primerView, name='home')
]
