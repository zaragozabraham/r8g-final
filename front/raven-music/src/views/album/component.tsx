import { Box, Divider, Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import MusicTable from '../../components/table/component';
import { albumSelector } from '../../features/musicSlice';
import { theme } from '../../theme/theme';

const gray = theme.palette.text.secondary;

const AlbumView = () => {
  const album = useAppSelector(albumSelector);
  useEffect(() => {
    console.log(album);
  }, [album]);
  
  return (
    <Box sx={{ height: '100%', p: { xs: 2, md: 2 }, width: 'available', overflow: 'scroll' }}>
      <Toolbar />
      <Box sx={{ margin: '15px 0' }}>
                <Typography variant='h4' color='white' fontWeight='bold'>
                    X100PRE
                </Typography>
            </Box>
            <Divider sx={{ backgroundColor: gray }}/>
      <MusicTable data={album} />
    </Box>
  )
}

export default AlbumView