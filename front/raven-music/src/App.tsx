import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SideMenu from './components/side_menu/component';
import DiscoverView from './views/discover/component';
import AlbumsView from './views/albums/component';
import SongsView from './views/songs/component';
import { Box } from '@mui/material';
import { Styles } from './theme/types';
import { useMemo } from 'react';
import HeaderNavBar from './components/navbar/component';
import OwnedView from './views/owned/component';
import PlaylistsView from './views/playlists/component';
import AlbumView from './views/album/component';
import LoginView from './views/login/component';
import ProfileView from './views/profile/component';

const App = () => {
  const location = useLocation();
  const haveBar = useMemo(() => location.pathname !== "/login", [location]);
  
  const styles: Styles = {
    root: {
      display: "grid",
      height: "100%",
      gridTemplateColumns: haveBar ? { xs: '50px auto', md: "200px auto"} : "auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
  };
  
  return (
    <Box sx={ styles.root }>
      {haveBar && <SideMenu />}
      <Box sx={ styles.container }>
        <HeaderNavBar />
        <Routes>
          <Route path="/" element={<DiscoverView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path="/albums" element={<AlbumsView />} />
          <Route path="/album/:albumId" element={<AlbumView />} />
          <Route path="/songs" element={<SongsView />} />
          <Route path="/ownedsongs" element={<OwnedView />} />
          <Route path="/playlist" element={<PlaylistsView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
