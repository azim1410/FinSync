import { Outlet } from 'react-router-dom';
import RightPannel from '../components/RightPannel';
import LeftPannel from '../components/LeftPannel';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ width: '20%', background: '#262626', padding: '1rem' }}>
        <LeftPannel />
      </Box>

      <Box sx={{ flex: 1, padding: '1rem', backgroundColor: '#262626'}}>
        <Outlet />
      </Box>

      <Box sx={{ width: '20%', background: '#262626', padding: '1rem' }}>
        <RightPannel />
      </Box>
    </Box>
  );
};

export default Layout;
