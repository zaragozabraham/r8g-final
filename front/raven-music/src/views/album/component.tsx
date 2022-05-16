import { Box, Divider, Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import MusicTable from '../../components/table/component';
import { albumSelector } from '../../features/musicSlice';
import { theme } from '../../theme/theme';
import { Album } from '../../models/album'

const gray = theme.palette.text.secondary;
const blue = theme.palette.primary.contrastText;

const AlbumView = () => {
  const album: Album = useAppSelector(albumSelector);
  useEffect(() => {
    console.log(album);
  }, [album]);

  return (
    <Box sx={{ height: '100%', p: { xs: 2, md: 2 }, width: 'available', overflow: 'scroll' }}>
      <Toolbar />
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant='h5' fontWeight='bold' sx={{ color: blue}}>
          {album.artists.name}
        </Typography>
        <Typography variant='h4' color='white' fontWeight='bold'>
          {album.name}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: gray }} />
      <MusicTable data={album} />
    </Box>
  )
}

export default AlbumView