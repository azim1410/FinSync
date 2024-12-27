import { Box, Button, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../features/auth/AuthSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
       dispatch(logout());
    }
    return (
        <Box sx={{
            backgroundColor: '#9be0c3', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'sticky', top: 0,
            flex: 1,
            width: '100%',
            height: '3rem',
            zIndex: 5,
            background: 'transparent', backdropFilter: 'blur(20px)', borderBottom: '1px solid #9be0c3'
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'white', fontSize: '2rem', }}>FinSync</Typography>
            <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <AccountCircleIcon sx={{ color: '#fdfdfd', marginRight: '1rem' }} />
                <Typography variant="h6" sx={{color: 'white'}}>User name</Typography>
                <Button onClick={() => handleLogout()} >
                    <LogoutIcon sx={{ color: '#fdfdfd', marginRight: '1rem' }}/>
                </Button>
            </Box>
        </Box>
    )
}

export default Navbar