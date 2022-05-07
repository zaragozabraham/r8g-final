import { Box, Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import AlbumCard from '../../components/cards/album/component'
import { albumsSelector } from '../../features/musicSlice'
import { getAlbums } from '../../services/album'
import { useHorizontalScroll } from '../../services/scroll/service'
import { Styles } from '../../theme/types'

const DiscoverView = () => {
  const dispatch = useDispatch();
  const albums = useAppSelector(albumsSelector);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  const styles: Styles = {
    albumSlider: {
      display: "flex",
      overflowX: "scroll",
      height: { xs: '235px', md: '275px' },
      gap: '20px',
      width: '100%'
    }
  }

  const scrollRef = useHorizontalScroll();
  // const something = [1, 2, 3, 4, 5, 6, 7, 8]

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
        <Box ref={scrollRef} sx={styles.albumSlider}>
          {albums.map((album, index) => (
            <AlbumCard {...album} album={album} key={`album-${album.id}`}/>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DiscoverView