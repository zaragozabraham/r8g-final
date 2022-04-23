from . import views
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'', views.ArtistViewSet)

urlpatterns = [
	path('', include(router.urls)),
]