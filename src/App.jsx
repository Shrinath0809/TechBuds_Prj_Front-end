import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateName from './components/createUser/CreateName'
import UpdateName from './components/update/UpdateName'
import ViewUser from './components/view/ViewUser'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<CreateName/>} />
          <Route path='/updateName/:id' element={<UpdateName/>} />
          <Route path='/viewUser' element={<ViewUser/>} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App