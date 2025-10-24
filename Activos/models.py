from django.db import models

# Create your models here.
class Equipos(models.Model):
    usuario = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    service_tag = models.CharField(max_length=10)
    serie = models.IntegerField()
    modelo = models.CharField(max_length=30, default="modelo")
    nombre = models.CharField(max_length=30,default="nombre")
    marca = models.CharField(max_length=20, default="marca")
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.usuario


