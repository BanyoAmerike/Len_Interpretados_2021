from django.shortcuts import render
from django.http import HttpResponse
from .models import Leap_years, Users

# Create your views here.
def primerView(request):
    return HttpResponse('Hola desde el servidor')

def leap_year(request):
    return render(request, 'leap.html')

def users(request):
    userObj = Users.objects.get(user = 'Inquisidor')
    return HttpResponse(f'Esto es lo que tiene la query\nUsuario: {userObj.user}\nContrase;a: {userObj.password}')