import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './components/main/SideBar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<SideBar page={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App