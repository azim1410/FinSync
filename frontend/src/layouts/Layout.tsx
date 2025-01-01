import { Outlet } from 'react-router-dom';
import RightPannel from '../components/RightPannel';
import LeftPannel from '../components/LeftPannel';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchUserData } from '../features/user/UserServices';
import { useEffect } from 'react';
import { setUserData } from '../features/user/UserSlice';


const Layout = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.mytheme);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserData(userId, token);
      dispatch(setUserData(data));
    }
    getData();

  }, [])

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
