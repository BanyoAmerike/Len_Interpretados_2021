from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def login(request):
    return render(request, 'login.html' )

def login_request(request):
    user = request.POST['user']
    password = request.POST['pass']
    '''
    if(user == user de base de datos and password == pass base de datos):
        HttpResponse(f'bienvenido {user}')
    else:
        HttpResponse('no te reconozco')
    '''
    return HttpResponse(f'Este es el usuario que se manda desde el login: {user}')