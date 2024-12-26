import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/dashboard/Dashboard';
import Layout from './layouts/Layout';

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/' element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoute