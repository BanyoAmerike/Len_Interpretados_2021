from django.shortcuts import render
from django.http import Httpresponse

# Create your views here.
def primerView(Request):
    return Httpresponse('Hola desde el servidor')