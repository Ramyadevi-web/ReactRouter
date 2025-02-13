import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience';
import Digitalmarketing from './components/Digitalmarketing';
import Career from './components/Career';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/fullstack' element={<Fullstack/>}></Route>
      <Route path='/datascience' element={<Datascience/>}></Route>
      <Route path='/digital-marketing' element={<Digitalmarketing/>}></Route>
      <Route path='/career' element={<Career/>}></Route>
      <Route path='/dashboard' element={<><Fullstack/><Datascience/><Digitalmarketing/><Career/></>}></Route>
      <Route path='/*' element={<Navigate to='/dashboard'/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
