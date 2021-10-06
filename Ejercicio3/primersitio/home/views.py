from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def primerView(request): 
    return HttpResponse('hola desde el servidor')    

def leapYear(request):
	return render(request, 'leap.html')

