import { AppBar, Box, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { theme } from '../../theme/theme';

const HeaderNavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
            <MenuItem onClick={handleMenuClose} sx={{ fontWeight: 'bold' }}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ fontWeight: 'bold' }}>My account</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>

                    <Typography></Typography>

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
                        sx={{ color: 'white' }}
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    )
}

export default HeaderNavBar