import { useState, useEffect } from 'react'
// import axios from "axios"

import './App.css'

import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { CreateBlog } from './pages/createblog'
import { Home } from './pages/home'
import { Landing } from './pages/landing'
import { Profile } from './pages/profile'
import { ReadBlog } from './pages/readblog'
import { Navbar } from './components/Navbar'
import { NavLink } from 'react-router-dom'
import { Layout } from './components/Layout'

function App() {

  // Pages
  // Landing Page
  // Homepage (filtered by recency)
  // ReadBlog
  // CreateBlog
  // ProfilePage
  // About US
  // Contact Us
  
 return (
  <Router>
{/* /* Create routes for each path */ }
    <Routes>

      <Route path="/" element={<Landing/>}/> 
      
      {/* Configuring nav elements in the landing page */}
      <Route element={<Layout/>}> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/createblog" element={<CreateBlog/>}/>
        <Route path="/readblog/:id" element={<ReadBlog/>}/>     
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
      
    </Routes>
  </Router>
 )
}     

export default App
