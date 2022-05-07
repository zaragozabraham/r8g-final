import { Box, Button, Typography } from '@mui/material';
import { theme } from '../../../theme/theme';
import { Styles } from '../../../theme/types';

const AlbumCard = ({album}) => {
    
    const styles: Styles = {
        imgContainer: {
            flexShrink: '0',
            marginTop: '10px',
            width: { xs: '150px', md: '200px' },
            height: { xs: '150px', md: '200px' },
            borderRadius: '10px',
            boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'
        },
        bottomData: {
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0', md: '0 20px' }
        },
        textButton: {
            padding: '0px'
        },
        mainText: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '9px', md: '11px' },
            padding: '0px'
        },
        secondaryText: {
            color: theme.palette.text.secondary,
            fontSize: { xs: '8px', md: '9px' },
            padding: '0px'
        }
    }

    const imgStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'
    }
    return (
        <Box sx={styles.imgContainer}>
            <img style={imgStyle} src={`${album.image}`} alt={`album-cover`} />
            <Box sx={styles.bottomData}>
                <Button variant='text' sx={styles.textButton}>
                    <Typography sx={styles.mainText}>{album.name}</Typography>
                </Button>
                <Button variant='text' sx={styles.textButton}>
                    <Typography sx={styles.secondaryText}>{`${album.artists.name} ${album.artists.last_name}`}</Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default AlbumCard