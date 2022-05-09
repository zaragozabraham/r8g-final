import { Box, Toolbar, Typography } from '@mui/material';


const AlbumsView = () => {
  return (
    <Box sx={{ height: '100%', p: { xs: 2, md: 2 }, width: 'available', overflow: 'scroll' }}>
      <Toolbar />
      <Box sx={{ margin: '15px 0' }}>
                <Typography variant='h4' color='white' fontWeight='bold'>
                    RENDER ALL ALBUMS
                </Typography>
            </Box>
    </Box>
  )
}

export default AlbumsView