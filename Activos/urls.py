from django.urls import path, include
from rest_framework import routers
from .views import EquiposViewSet  

router = routers.DefaultRouter()
router.register(r'equipos', EquiposViewSet)
urlpatterns = [
    path('', include(router.urls)),
]