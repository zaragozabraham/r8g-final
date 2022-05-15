import { Box, Divider, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { AuthSelector } from "../../features/authSlice";
import { theme } from "../../theme/theme";

const ProfileView = () => {
    const user = useAppSelector(AuthSelector);

    return (
        <Box sx={{ height: '100%', p: { xs: 2, md: 2 }, width: 'available', overflow: 'scroll' }}>
            <Toolbar />
            <Box>
                <Typography color='white' variant='h4'> Profile </Typography>
                <Divider sx={{ backgroundColor: 'white', m: '10px 0' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '20px 50px', gap: '15px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                        <Typography color='white'>username: </Typography>
                        <Typography color='white'>{user.username}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                        <Typography color='white'>email: </Typography>
                        <Typography color='white'>{user.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                        <Typography color='white'>password: </Typography>
                        <Typography color='white'> edit </Typography>
                    </Box>
                </Box>
                <Typography color='white' variant='h4'> Address </Typography>
                <Divider sx={{ backgroundColor: 'white', m: '10px 0' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '20px 50px', p: '20px 40px', gap: '15px', backgroundColor: theme.palette.primary.dark, borderRadius: '20px' }}>
                    <Typography color='white'>Abraham Zaragoza</Typography>
                    <Typography color='white'>Phone</Typography>
                    <Typography color='white'>Address Line 1</Typography>
                    <Typography color='white'>Address Line 1</Typography>
                    <Typography color='white'>City State ZipCode</Typography>
                    <Typography color='white'>Country</Typography>
                    <Typography color='white'>Default</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default ProfileView;