import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import CollegeRegister from './pages/College/CollegeRegister'
import CollegeLogin from './pages/College/CollegeLogin'
import Dashboard from './pages/College/Dashboard'
import Jobs from './pages/Jobs/Jobs'
import Admin from './pages/Admin/Admin'
import AdminLogin from './components/auth/AdminLogin'
import NotFound from './pages/NotFound'
import Home from './pages/Homepage/Home'
import NewNavbar from './components/main/NewNavbar.jsx'
import SideBar from './components/main/SideBar'
import Alumni from './pages/Alumni/Alumni'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/college-register' element={<CollegeRegister />} />
          <Route path='/college-login' element={<CollegeLogin />} />
          <Route path='/jobs' element={<SideBar page={<Jobs />} />} />
          <Route path='/home' element={<SideBar page={<Home />} />} />
          <Route path='/alumni' element={<SideBar page={<Alumni />} />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/dashboard/college' element={<Dashboard />} />
          <Route path='/dashboard/admin' element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App