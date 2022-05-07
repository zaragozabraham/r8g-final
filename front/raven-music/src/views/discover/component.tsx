import { Box, Toolbar, Typography } from '@mui/material'
import AlbumCard from '../../components/cards/album/component'
import { Styles } from '../../theme/types'

const DiscoverView = () => {

  const styles: Styles = {
    albumSlider: {
      display: "flex",
      flexWrap: 'no-wrap',
      overflowX: "auto",
      height: {xs: '235px', md: '285px'},
      width: 'fit-content',
      gap: '20px'
    }
  }
  const something = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  return (
    <Box sx={{ height: '100%', p: {xs: 2, md: 4 } }}>
      <Toolbar/>
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant='h4' color='white' fontWeight='bold'>
          Enjoy your day discovering new music
        </Typography>
      </Box>
      <Box sx={{ margin: '15px 0' }}>
        <Typography variant='h6' color='white'>What's New</Typography>
        <Box sx={styles.albumSlider}>
          { something.map((item, index) => (
            <AlbumCard />
          )) }
        </Box>
      </Box>
    </Box>
  )
}

export default DiscoverView