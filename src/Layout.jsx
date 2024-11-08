import React from 'react'
import  Navbar  from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout({searchCate,search,setSearch}) {
  return (
   <>
   <Navbar searchCate={searchCate} search={search} setSearch={setSearch}/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout