from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def home(request):
    return HttpResponse('Bienvenido al servidor de Dino')

def greetings(request):
    return HttpResponse('Saludos desde el servidor de la Dino')

def leap_web(request):
    return render(request,'leap.html')

