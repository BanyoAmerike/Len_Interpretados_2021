from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('Bienvenido a mi servidor')

def greetings(request):
    return HttpResponse('Saludos desde el servidor')

def leap_year(request):
    return render(request, 'leap.html')