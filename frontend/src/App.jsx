import React from 'react'
import Login from './components/UserLogin/Login'
import SignUp from './components/UserLogin/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path='/Login'/>
          <Route element={<SignUp/>} path='/SignUp'/>
          {/* This is the control center */}
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}

    </div>
  )
}
