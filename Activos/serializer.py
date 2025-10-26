from rest_framework import serializers
from .models import Equipos

class EquiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipos
        fields = '__all__'
        