import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import SideMenu from './components/side_menu/component';
import DiscoverView from './views/discover/component';
import AlbumsView from './views/albums/component';
import SongsView from './views/songs/component';
import { Box } from '@mui/material';
import { Styles } from './theme/types';
import { useEffect, useMemo } from 'react';
import HeaderNavBar from './components/navbar/component';
import OwnedView from './views/owned/component';
import PlaylistsView from './views/playlists/component';
import AlbumView from './views/album/component';
import LoginView from './views/login/component';
import ProfileView from './views/profile/component';
import { useAppSelector } from './app/hooks';
import { accessTokenSelector, isAdminSelector } from './features/authSlice';
import AdminView from './views/admin/component';

const publicPaths = ['/', '/login', '/albums', '/album/:albumId', '/songs' ];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = useAppSelector(accessTokenSelector);
  const isAdmin = useAppSelector(isAdminSelector);

  useEffect(() => {
    const publicPath = publicPaths.some((path) => path === location.pathname);
    const current = location.pathname;

    if (token === undefined && !publicPath) navigate('/');
    if (!isAdmin && current === '/admin') navigate('/')
    
  }, [location, navigate, token, isAdmin])
  
  const haveBar = useMemo(() => location.pathname !== '/login', [location]);
  
  const styles: Styles = {
    root: {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: haveBar ? { xs: '50px auto', md: '200px auto'} : 'auto',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
  };
  
  return (
    <Box sx={ styles.root }>
      {haveBar && <SideMenu />}
      <Box sx={ styles.container }>
        <HeaderNavBar />
        <Routes>
          <Route path='/' element={<DiscoverView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/albums' element={<AlbumsView />} />
          <Route path='/album/:albumId' element={<AlbumView />} />
          <Route path='/songs' element={<SongsView />} />
          <Route path='/ownedsongs' element={<OwnedView />} />
          <Route path='/playlist' element={<PlaylistsView />} />
          <Route path='/profile' element={<ProfileView />} />
          <Route path='/admin' element={<AdminView />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App;
