import { TabContext, TabPanel } from '@mui/lab';
import { Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import CreateGenre from '../../forms/genre/create';
import GenreTable from '../../forms/genre/table';
import { theme } from '../../theme/theme';

const AdminView = () => {
    const blue = theme.palette.primary.contrastText;
    
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ height: '100%', p: { xs: 2, md: 4 }, width: 'available' }}>
            <Toolbar />
            <Typography variant='h4' color='white'> ADMIN CREATE AREA</Typography>
            <TabContext value={value}
            >
            <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
                <Tabs 
                onChange={handleChange}
                value={value}
                >
                    <Tab label='Genre' value='1' />
                    <Tab label='Artist' value='2' />
                    <Tab label='Album' value='3' />
                    <Tab label='Song' value='4' />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value="1">
                    <Box color='white' sx={{ gap: '20px' }}>
                        <GenreTable />
                        <CreateGenre />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                <Typography color='white'> 2</Typography>
                </TabPanel>
                <TabPanel value="3">
                <Typography color='white'> 3</Typography>
                </TabPanel>
                <TabPanel value="4">
                <Typography color='white'> 4</Typography>
                </TabPanel>
            </Box>
            </TabContext>
        </Box>
    )
}

export default AdminView;