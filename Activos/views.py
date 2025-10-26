from django.shortcuts import render
from rest_framework import viewsets
from .models import Equipos
from .serializer import EquiposSerializer

# Create your views here.
class EquiposViewSet(viewsets.ModelViewSet):
    queryset = Equipos.objects.all()
    serializer_class = EquiposSerializer