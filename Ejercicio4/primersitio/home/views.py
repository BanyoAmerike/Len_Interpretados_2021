from django.shortcuts import render
from home.models import Users
from .models import Leap_years, Users
from django.http import HttpResponse
# Create your views here.

def primerView(request): 
    return HttpResponse('hola desde el servidor')    

def leapYear(request):
	return render(request, 'leap.html')

def users(request):
    userObj = Users.objects.get(user = 'cryostorage')
    return HttpResponse(f'Esto es lo que tiene la query \nUsuario: {userObj.user} \nContraseña: {userObj.password}')
