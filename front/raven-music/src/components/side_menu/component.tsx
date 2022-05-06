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
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    const MenuButtons: NavButton[] = useMemo(
        () => [
            {
                text: "Discover",
                icon: <ExploreIcon />,
                onClick: () => navigate("/")
            },
            {
                text: "Albums",
                icon: <LibraryMusicIcon />,
                onClick: () => navigate("/albums")
            },
            {
                text: "Songs",
                icon: <MusicNoteIcon />,
                onClick: () => navigate("/songs")
            },
        ],
        [navigate]
    );

    const LibraryButtons: NavButton[] = useMemo(
        () => [
            {
                text: "Owned",
                icon: <RadioButtonCheckedIcon />,
                onClick: () => { }
            },
            {
                text: "Playlist",
                icon: <AlbumIcon />,
                onClick: () => { }
            },
            {
                text: "Favorites",
                icon: <FavoriteIcon />,
                onClick: () => { }
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
            display: { xs: 'flex', md: 'none' }
        },
        drawerItem: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingLeft: '25px'
        },
        drawerIcon: {
            color: '#8D9295',
            minWidth: '35px'
        },
        subtitleMenu: {
            fontWeight: 'bold',
            ml: { xs: '5px', md: '15px' },
            fontSize: { xs: '12px' }
        }
    }

    const dark = theme.palette.primary.dark;
    const gray = theme.palette.text.secondary;

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
    }));

    return (
        <Drawer
            variant='permanent'
            anchor='left'
            PaperProps={{ sx: { backgroundColor: dark, color: gray } }}
            sx={{
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: { xs: '10vw', md: '14vw' }, boxSizing: 'border-box' }
            }}
        >
            <DrawerHeader>
                <Typography sx={styles.app_name}>
                    Raven Music
                </Typography>
                <Typography sx={styles.app_name_xs}>
                    RM
                </Typography>
            </DrawerHeader>
            <Divider />
            <Typography variant='subtitle2' sx={styles.subtitleMenu}>Menu</Typography>
            <List>
                {MenuButtons.map((button, index) => (
                    <ListItemButton
                        key={`${button.text}-${index}`}
                        onClick={button.onClick}
                        sx={styles.drawerItem}
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
                        onClick={button.onClick}
                        sx={styles.drawerItem}
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