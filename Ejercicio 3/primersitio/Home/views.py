from django.shortcuts import render
from .models import Leap_years, Users
from django.http import HttpResponse

# Create your views here.
def primerView(request):
	return HttpResponse('Hola desde el servidor')
def leapYear(request):
	return render(request, 'leap.html')
def users(request):
	userObj = Users.objects.get(id = '1')
	return HttpResponse(f'Esto es lo que tiene la query\nUsuario: {userObj.user}\nContraseña: {userObj.password}')
