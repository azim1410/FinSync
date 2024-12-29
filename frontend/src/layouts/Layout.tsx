import { Outlet } from 'react-router-dom';
import RightPannel from '../components/RightPannel';
import LeftPannel from '../components/LeftPannel';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const Layout = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.mytheme);

  return (
    <Box sx={{ backgroundColor: currentTheme === 'light' ? '#f7f7f7' : '#16181a' }}>
      <Navbar />
      <Box sx={{ display: 'flex', minHeight: '100vh', maxWidth: '1280px', margin: 'auto' }}>
        <Box sx={{ width: '20%', background: currentTheme === 'light' ? '#f7f7f7' : '#16181a', padding: '1rem' }}>
          <LeftPannel />
        </Box>

        <Box sx={{ flex: 1, padding: '1rem', backgroundColor: currentTheme === 'light' ? '#f7f7f7' : '#16181a' }}>
          <Outlet />
        </Box>

        <Box sx={{ width: '20%', background: currentTheme === 'light' ? '#f7f7f7' : '#16181a', padding: '1rem' }}>
          <RightPannel />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
