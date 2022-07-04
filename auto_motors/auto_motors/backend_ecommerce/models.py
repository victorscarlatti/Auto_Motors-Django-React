from django.db import models

# Create your models here.
class product(models.Model):
    id=models.AutoField(primary_key=True,null=False,blank=False)
    nome=models.CharField(default=None,null=False,blank=False,max_length=100)
    desc=models.CharField(default=None,null=False,blank=False,max_length=100)
    preco=models.CharField(default=None,null=False,blank=False,max_length=100)
    status=models.CharField(default=None,null=False,blank=False,max_length=100)
    created=models.DateTimeField(null=False,blank=False,auto_now_add=True)
    updated=models.DateTimeField(null=False,blank=False,auto_now=True)
    owner=models.CharField(default=None,null=False,blank=False,max_length=100)
    imgs=models.TextField(default=None,null=False,blank=False)

class banner_img(models.Model):    
    id=models.AutoField(primary_key=True,null=False,blank=False)
    img=models.TextField(default=None,null=False,blank=False)
    desc=models.CharField(default=None,null=False,blank=False,max_length=100)