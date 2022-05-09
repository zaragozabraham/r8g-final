import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Styles } from '../../theme/types';
import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { NavButton } from "./types";
import { useMemo } from 'react';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from "@mui/icons-material/Album";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useLocation, useNavigate } from 'react-router-dom';
import Raven from '../../raven.svg';

const SideMenu = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const MenuButtons: NavButton[] = useMemo(
        () => [
            {
                text: "Discover",
                icon: <ExploreIcon />,
                path: "/"
            },
            {
                text: "Albums",
                icon: <LibraryMusicIcon />,
                path: "/albums"
            },
            {
                text: "Songs",
                icon: <MusicNoteIcon />,
                path: "/songs"
            },
        ],
        []
    );

    const LibraryButtons: NavButton[] = useMemo(
        () => [
            {
                text: "Owned",
                icon: <RadioButtonCheckedIcon />,
                path: "/ownedsongs"
            },
            {
                text: "Playlist",
                icon: <AlbumIcon />,
                path: "/playlist"
            },
            {
                text: "Favorites",
                icon: <FavoriteIcon />,
                path: ""
            },
        ],
        []
    );

    const styles: Styles = {
        app_name: {
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginTop: '15px',
            marginBottom: '25px',
            color: 'white',
            display: { xs: 'none', md: 'flex' }
        },
        app_name_xs: {
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginTop: '15px',
            marginBottom: '25px',
            color: 'white',
            display: { xs: 'none', md: 'none' }
        },
        drawerItem: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '25px'

        },
        drawerIcon: {
            color: 'inherit',
            minWidth: '35px'
        },
        subtitleMenu: {
            fontWeight: 'bold',
            ml: { xs: '5px', md: '15px' },
            fontSize: { xs: '12px' }
        }
    }

    const imgStyle = {
        width: '25px',
        height: '25px',
        padding: '17px 5px',
        fill: 'white'
    }

    const dark = theme.palette.primary.dark;
    const gray = theme.palette.text.secondary;

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    }));

    return (
        <Drawer
            variant='permanent'
            anchor='left'
            PaperProps={{ sx: { backgroundColor: dark, color: gray } }}
            sx={{
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: { xs: '50px', md: '200px' }, boxSizing: 'border-box' }
            }}
        >
            <DrawerHeader>
                <img className='RavenLogo' style={imgStyle} src={Raven} alt='Raven Logo' />
                <Typography sx={styles.app_name}>
                    Raven Music
                </Typography>
            </DrawerHeader>
            <Divider />
            <Typography variant='subtitle2' sx={styles.subtitleMenu}>Menu</Typography>
            <List>
                {MenuButtons.map((button, index) => (
                    <ListItemButton
                        selected={button.path === pathname}
                        key={`${button.text}-${index}`}
                        onClick={() => navigate(button.path)}
                        sx={styles.drawerItem}
                        className='MyListItemButton'
                    >
                        <ListItemIcon sx={styles.drawerIcon}>{button.icon}</ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }}>{button.text}</Typography>} sx={{ display: { xs: 'none', md: 'flex' } }} />
                    </ListItemButton>
                ))}
            </List>
            <Divider />
            <Typography variant='subtitle2' sx={styles.subtitleMenu}>Library</Typography>
            <List>
                {LibraryButtons.map((button, index) => (
                    <ListItemButton
                        key={`${button.text}-${index}`}
                        onClick={() => navigate(button.path)}
                        sx={styles.drawerItem}
                        className='MyListItemButton'
                    >
                        <ListItemIcon sx={styles.drawerIcon}>{button.icon}</ListItemIcon>
                        <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }}>{button.text}</Typography>} sx={{ display: { xs: 'none', md: 'flex' } }} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    )
}

export default SideMenu