import { Box, Button, ButtonBase, Typography } from "@mui/material";
import { Styles } from "../../../theme/types";

const ArtistCard = ({ artist }) => {

    const styles: Styles = {
        imgContainer: {
            flexShrink: '0',
            marginTop: '10px',
            width: { xs: '150px', md: '200px' },
            height: { xs: '150px', md: '200px' },
            borderRadius: '10px',
            boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)'
        },
        mainText: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '10px', md: '14px' },
            padding: '0px'
        },
        buttonImg: {
            width: { xs: '150px', md: '200px' },
            height: { xs: '150px', md: '200px' },
            backgroundImage: `url(${artist.image})`,
            backgroundSize: 'cover',
            borderRadius: '50%'
        },
        bottomData: {
            textAlign: 'center',
            paddingTop: '10px'
        }
    }

    return (
        <Box sx={styles.imgContainer}>
            <ButtonBase
                focusRipple
                key={'x'}
                onClick={() => {}}
                sx={styles.buttonImg}
            >
            </ButtonBase>
            <Box sx={styles.bottomData}>
                <Button variant='text' sx={styles.textButton}>
                    <Typography sx={styles.mainText}>{`${artist.name} ${artist.last_name}`}</Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default ArtistCard;