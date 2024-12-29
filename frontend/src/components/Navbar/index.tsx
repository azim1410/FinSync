import { Box, Button, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../features/theme/themeSlice";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.mytheme);

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    }
    return (
        <Box sx={{
            backgroundColor: '#9be0c3', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'sticky', top: 0,
            flex: 1,
            width: '100%',
            height: '3.5rem',
            zIndex: 5,
            background: 'transparent', backdropFilter: 'blur(20px)', borderBottom: '1px solid #9be0c3'
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: currentTheme === 'light' ? '#444444' : '#d8d8d8', fontSize: '2rem', }}>FinSync</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <AccountCircleIcon sx={{ color: currentTheme === 'light' ? '#444444' : '#d8d8d8', marginRight: '1rem' }} />
                <Typography variant="h6" sx={{ color: currentTheme === 'light' ? '#444444' : '#d8d8d8' }}>User name</Typography>
                <Button onClick={() => handleLogout()} >
                    <LogoutIcon sx={{ color: currentTheme === 'light' ? '#444444' : '#d8d8d8', marginRight: '1rem' }} />
                </Button>
                <Button onClick={handleToggleTheme}>
                    {currentTheme === 'light' ?
                        <LightModeIcon sx={{ color: currentTheme === 'light' ? '#444444' : '#d8d8d8' }} /> :
                        <BedtimeIcon sx={{ color: currentTheme === 'light' ? '#444444' : '#d8d8d8' }} />
                    }
                </Button>
            </Box>
        </Box>
    )
}

export default Navbar