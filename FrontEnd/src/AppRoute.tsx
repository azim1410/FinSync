import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoute