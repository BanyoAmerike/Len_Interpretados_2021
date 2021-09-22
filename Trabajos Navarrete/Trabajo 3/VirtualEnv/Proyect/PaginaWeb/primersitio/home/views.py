from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def firstView(Request):
    return HttpResponse('Hola desde el servidor')