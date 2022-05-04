from . import views
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewSet)
router.register(r'address', views.AdressViewSet)
router.register(r'ownedSongs', views.OwnedSongsViewSet)
router.register(r'playlists', views.PlaylistViewSet)
router.register(r'songOwned', views.SongOwnedViewSet)
router.register(r'songPlaylist', views.SongPlaylistViewSet)
router.register(r'', views.UserViewSet)

urlpatterns = [
	path('login', views.LoginView.as_view()),
    path('logout', views.LogoutView.as_view(), name='auth_logout'),
	path('', include(router.urls)),
]