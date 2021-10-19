from django.shortcuts import render
from django.http import HttpResponse
from.models import Users
# Create your views here.


def home(request):
    return HttpResponse('Bienvenido al servidor de Dino')

def greetings(request):
    return HttpResponse('Saludos desde el servidor de la Dino')

def leap_web(request):
    return render(request,'leap.html')

def users(request):
    user = Users.objects.get(id = '1')
    return HttpResponse(f'Esto es lo que tiene el query\nUsuario: {user.user}\nContraseña: {user.password}')

