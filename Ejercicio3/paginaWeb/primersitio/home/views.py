from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def primerView(Request):
    return HttpResponse('Hola desde el servidor')

def greetings(Request):
    return HttpResponse('Saludos desde el servidor')

def leap_year(Request):
    return render(Request,'leap.html')
