from . import views
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewSet)
router.register(r'address', views.AdressViewSet)
router.register(r'ownedSongs', views.OwnedSongsViewSet)
router.register(r'ownedAlbums', views.OwnedAlbumsViewSet)
router.register(r'albumOwned', views.AlbumOwnedViewSet)
router.register(r'playlists', views.PlaylistViewSet)
router.register(r'songOwned', views.SongOwnedViewSet)
router.register(r'songPlaylist', views.SongPlaylistViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'orderAlbum', views.OrderAlbumViewSet)
router.register(r'orderSong', views.OrderSongViewSet)
router.register(r'', views.UserViewSet)

urlpatterns = [
	path('login', views.LoginView.as_view()),
    path('logout', views.LogoutView.as_view(), name='auth_logout'),
	path('', include(router.urls)),
]