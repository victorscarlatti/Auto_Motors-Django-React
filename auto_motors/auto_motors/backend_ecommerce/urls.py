from django.urls import path
from . import views

urlpatterns = [
    path('', views.getsrc, name="getsrc"),
    path('getsrc/', views.getsrc, name="getsrc"), 
    path('getprods/', views.getprods, name="getprods"), 
    path('createprods', views.createprods, name="createprods"), 
    path('updateprods/<str:pk>', views.updateprods, name="updateprods"), 
]
