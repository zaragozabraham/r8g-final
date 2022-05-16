import { Box, Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import AudioPlayerView from '../../components/audioplayer/component'
import AlbumCard from '../../components/cards/album/component'
import ArtistCard from '../../components/cards/artist/component'
import { AuthSelector } from '../../features/authSlice'
import { albumsSelector, artistsSelector } from '../../features/musicSlice'
import { getAlbums } from '../../services/album'
import { getArtists } from '../../services/artists'
import { Styles } from '../../theme/types'

const DiscoverView = () => {
  const dispatch = useDispatch();
  const albums = useAppSelector(albumsSelector);
  const artists = useAppSelector(artistsSelector);
  const auth = useAppSelector(AuthSelector);

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getArtists());
  }, [dispatch, auth]);

  const styles: Styles = {
    albumSlider: {
      display: "flex",
      overflowX: "scroll",
      height: { xs: '235px', md: '275px' },
      gap: '20px',
      width: '100%'
    }
  }

  // ADD a filter to only render the newest 6 albums & artists

  return (
    <Box sx={{ height: '100%', p: { xs: 2, md: 4 }, width: 'available' }}>
      <Toolbar />
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant='h4' color='white' fontWeight='bold'>
          Enjoy your day discovering new music
        </Typography>
      </Box>
      <Box sx={{ margin: '15px 0', width: '100%' }}>
        <Typography variant='h6' color='white'>What's New</Typography>
        <Box sx={styles.albumSlider}>
          {albums.map((album, index) => (
            <AlbumCard {...album} album={album} key={`album-${album.id}`}/>
          ))}
        </Box>
      </Box>
      <Box sx={{ margin: '15px 0', width: '100%' }}>
        <Typography variant='h6' color='white'>Featured Artists</Typography>
        <Box sx={styles.albumSlider}>
          {artists.map((artist, index) => (
            <ArtistCard {...artist} artist={artist} key={`album-${artist.id}`}/>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DiscoverView;