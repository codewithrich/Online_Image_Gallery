import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Addimage from './pages/Addimage.js';
import Viewgallery from './pages/Viewgallery.js';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Addimage/>} />
        <Route path='/vg' element={<Viewgallery/>} />
        <Route path='*' element={<h1>404 Page</h1>}/>
      </Routes>
    </>
  )
}

export default App