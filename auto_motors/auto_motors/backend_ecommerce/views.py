from django.http import JsonResponse
from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view 
import json 

# Create your views here.
#@api_view(['GET', 'POST'])

def getsrc(request):
    if request.method == 'GET':
        resp_data = {'ok':list(banner_img.objects.all().values())}
        return JsonResponse(resp_data)
    if request.method == 'POST': 
        resp_data = {'ok':list(banner_img.objects.all().values())}
        return JsonResponse(resp_data)

def getprods(request):
    if request.method == 'GET':
        resp_data = {'ok':list(product.objects.all().values())}
        return JsonResponse(resp_data)

    if request.method == 'POST': 
        resp_data = {'ok':list(product.objects.all().values())}
        return JsonResponse(resp_data)


@api_view(['POST'])
def createprods(request):    
    if request.method == 'POST':
        r=json.loads(str(request.body)[2:][:-1])
        product(nome=r['nome'],desc=r['desc'],preco=r['preco'],owner=r['owner'],imgs=r['img'].split("data:image/jpeg;base64,")[1],status='1').save()        
        resp_data = {'ok':'ok'}
        return JsonResponse(resp_data)

@api_view(['PUT'])
def updateprods(request, pk):    
    if request.method == 'PUT': 
        print(pk)
        product.objects.filter(pk=pk).update(status=str(int(product.objects.get(pk=pk).status)+1))        
        resp_data = {'ok':list(product.objects.all().values())}
        return JsonResponse(resp_data)
