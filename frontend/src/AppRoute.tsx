import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login-a/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/dashboard/Dashboard';
import Layout from './layouts/Layout';
import ProtectedRoute from './routes/ProtectedRoute';
import Landing from './Pages/LandingPage';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
   
        <Route element={<ProtectedRoute />}>
          <Route path="/finsync" element={<Layout />}>
            <Route path="/finsync/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
