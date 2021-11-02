from django import urls
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('logreq/', views.login_request, name= 'logreq'),
    #path('/',include('login.urls'))
]