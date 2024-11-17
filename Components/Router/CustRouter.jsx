import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Campuses from '../Campuses/Campuses'
import AcademicDetails from '../Student/AcademicDetails'
import NonAcad from '../Student/NonAcad'

const CustRouter = () => {
  return (
    <div>
      
      
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/campuses' element={<Campuses/>}/>
            <Route path='/student/academic' element={<AcademicDetails/>}/>
            <Route path='/student/nonacademic' element={<NonAcad/>}/>
      </Routes>
      
      
    </div>
  )
}

export default CustRouter;