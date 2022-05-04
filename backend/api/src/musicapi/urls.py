from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] 

schema_view = get_schema_view(
   openapi.Info(
      title="MusicStore API",
      default_version='v1.2.0',
      description="Music Store API",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@musicstore.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns += [
    path('admin/', admin.site.urls),
    path('api_auth/', include('rest_framework.urls')),
    path('users/', include('musicapi.users.urls')),
    path('genres/', include('musicapi.genres.urls')),
    path('artists/', include('musicapi.artists.urls')),
    path('songs/', include('musicapi.songs.urls')),
    path('albums/', include('musicapi.albums.urls')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]