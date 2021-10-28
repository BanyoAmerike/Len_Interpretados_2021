from django.shortcuts import render
from .models import Leap_years
from .models import User_view
from django.http import HttpResponse

# Create your views here.
def primerView(Request):
    return HttpResponse('Hola desde el servidor')

def greetings(Request):
    return HttpResponse('Saludos desde el servidor')

def leap_year(Request):
    return render(Request,'leap.html')

def users (Request):
     userObj = User_view.objects.get(user = 'Fer')
     return  HttpResponse(f'Esto es lo que tiene la query\nUsuario: {userObj.user}\nConstraseña: {userObj.password}') 