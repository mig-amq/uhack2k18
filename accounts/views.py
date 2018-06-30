from django.shortcuts import render
from . models import Account

# Create your views here.
def index(requests):
    return render(requests, 'index.html')

def register(requests):
    problem = (Account()).create(email=requests.GET['email'], password=requests.GET['password'], fname=requests.GET['fname'],\
    lname=requests.GET['lname'], cardno=requests.GET['cardno'], contact=requests.GET['contact'])
    return render(requests, 'index.html')

def login(request):
    login = (Account()).login(email=request.GET['email'], password=request.GET['password'])

    if login:
        return render(request, 'dashboard.html')
    else:
        return render(request, 'index.html')