import React from 'react'

import './App.css'
import Studentdata from './Componets/StudentData/Studentdata'

import Header from './Componets/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './Componets/Home/Home'
import ViewData from './Componets/ViewData/ViewData'
import StudentEdit from './Componets/Edit/Edit'
import Viwe from './Componets/Viwe/Viwe'

function App() {


  return (
    <>
    <Header/>
    <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/studentData' element={<Studentdata/>}></Route>
        <Route path='/viewData' element={<ViewData/>}></Route>
        <Route path='/edit' element={<StudentEdit />}></Route>
        <Route path='/viwe' element={<Viwe/>}></Route>
      

    </Routes>
      

    </>
  )
}

export default App
