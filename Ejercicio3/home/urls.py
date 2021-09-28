from django.urls.resolvers import URLPattern
from django.urls import path
from . import views

urlpatterns = [
    path('bienvenida/', views.home, name='home'),
    path('saludos/', views.greetings, name='saludos')
]