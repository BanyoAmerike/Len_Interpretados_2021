from django.shortcuts import render
from django.http import HttpResponse

from login.models import Users

# Create your views here.
def login(request):
    return render(request, 'login.html' )

def login_request(request):
    authuser = request.POST['user']
    authpassword = request.POST['pass']
    '''
    auth = Users.objects.filter(user = authuser, password = authpassword)
    if (auth.user == authuser and auth.password == authpassword):
        return HttpResponse(f'bienvenido {authuser}')
    else:
        return HttpResponse('No te reconozco')
    '''
    return HttpResponse(f'Este es el usuario que se manda desde el login: {authuser}')