from django.urls import path

from . import views

urlpatterns = [
    path('<str:word>', views.index, name='index'),
]