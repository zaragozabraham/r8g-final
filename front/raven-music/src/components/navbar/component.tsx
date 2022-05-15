import { AppBar, Box, Button, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { theme } from '../../theme/theme';
import { Styles } from '../../theme/types';
import { useNavigate } from 'react-router-dom';
import { AuthSelector, loggedSelector } from '../../features/authSlice';
import { logoutUser } from '../../services/user';
import { store } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import React from 'react';

const HeaderNavBar = () => {
    const navigate = useNavigate();
    const userData = useAppSelector(AuthSelector);
    const isLogged = useAppSelector(loggedSelector);
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    useEffect(() => {
        // console.log(isLogged);
    }, [isLogged]);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        handleMenuClose();
        await store.dispatch(logoutUser(userData));
    };

    const handleClick = ( route: string) => {
        handleMenuClose();
        navigate(`/${route}`);
    }

    const styles: Styles = {
        signInButton: {
            color: 'white',
            display: isLogged ? 'none' : 'flex', width: '100px'
        }
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={'account-menu'}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{ sx: { backgroundColor: theme.palette.primary.dark } }}
        >
            <MenuItem onClick={() => handleClick('profile')} sx={{ fontWeight: 'bold' }}>Profile</MenuItem>
            <MenuItem onClick={handleLogout} sx={{ fontWeight: 'bold' }}>Logout</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>

                    <Box sx={{ width: '100px', ml: { xs: '0', md: '100px' } }}>
                    </Box>

                    <TextField
                        className='search-bar'
                        size='small'
                        label='Search'
                        sx={{ width: { xs: '200px', md: '600px' } }}
                        InputLabelProps={{
                            style: { color: '#FFF', paddingLeft: 15 },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SearchIcon sx={{ color: 'white', paddingRight: 2 }} />
                                </InputAdornment>
                            )
                        }} />
                    <IconButton
                        size='large'
                        edge='end'
                        aria-label='account of current user'
                        aria-haspopup='true'
                        onClick={handleMenuOpen}
                        sx={{ color: 'white', display: isLogged ? 'flex' : 'none' }}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Button
                        variant='text'
                        sx={styles.signInButton}
                    onClick={() => navigate('/login')}
                    >
                    <Typography>Sign In</Typography>
                </Button>
            </Toolbar>
        </AppBar>
            { renderMenu }
        </Box >
    )
}

export default HeaderNavBar