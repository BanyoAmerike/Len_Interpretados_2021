from django.shortcuts import render
from django.http import HttpResponse
from .models import Leap_years, Users

# Create your views here.

def home(request):
    return HttpResponse('Hola desde el servidor')

def greetings(request):
    return HttpResponse('Saludos desde el servidor')

def leap_year(request):
    return render(request, 'leap.html')

def users(request):
    userObj = Users.objects.get(id = '1')
    return HttpResponse(f'Esto es lo que tiene la query \nUsuario: {userObj.user} \nContraseña: {userObj.password}')