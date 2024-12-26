import { Outlet } from 'react-router-dom';
import RightPannel from '../components/RightPannel';
import LeftPannel from '../components/LeftPannel';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '20%', background: '#f0f0f0', padding: '1rem' }}>
        <LeftPannel />
      </div>

      <div style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </div>

      <div style={{ width: '20%', background: 'gray', padding: '1rem' }}>
        <RightPannel />
      </div>
    </div>
  );
};

export default Layout;
