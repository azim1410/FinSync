import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoute