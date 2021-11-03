from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def Login(request):
    return render(request, 'Login.html')

def login_request(request):
    user = request.POST['user']
    password = request.POST['pass']
    '''
    if (user == user de base de datos and pasword == pass base de datos)

    '''
    return HttpResponse(f'Este es el usuario que se manda desde el login: {user}')
    