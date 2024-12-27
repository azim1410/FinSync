import { Outlet } from 'react-router-dom';
import RightPannel from '../components/RightPannel';
import LeftPannel from '../components/LeftPannel';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: '#1b1b1b' }}>
      <Navbar />
      <Box sx={{ display: 'flex', minHeight: '100vh', maxWidth: '1280px', margin: 'auto' }}>
        <Box sx={{ width: '20%', background: '#1b1b1b', padding: '1rem' }}>
          <LeftPannel />
        </Box>

        <Box sx={{ flex: 1, padding: '1rem', backgroundColor: '#1b1b1b' }}>
          <Outlet />
        </Box>

        <Box sx={{ width: '20%', background: '#1b1b1b', padding: '1rem' }}>
          <RightPannel />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
