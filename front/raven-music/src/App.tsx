import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideMenu from './components/side_menu/component';
import DiscoverView from './views/discover/component';
import AlbumsView from './views/albums/component';
import SongsView from './views/songs/component';

const App = () => {
  return (
    <>
      <SideMenu />
      <Routes>
        <Route path="/" element={<DiscoverView />} />
        <Route path="/albums" element={<AlbumsView />} />
        <Route path="/songs" element={<SongsView />} />
      </Routes>
    </>
  )
}

export default App
