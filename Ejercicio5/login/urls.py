from django.urls.resolvers import URLPattern
from django.urls import path
from . import views 

urlpatterns = [
    path('', views.Login, name='login'),
    path('logreq/', views.login_request, name= 'logreq')
]
