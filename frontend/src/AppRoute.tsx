import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/finsync" element={<Landing />}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoute