import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Main from './components/Main'
import Footer from './components/Footer'
import Layout from './Layout';
import Product from './components/Product'
import InnerCardsDisplay from './components/InnerCardsDisplay'
import Cards from './components/Cards'
import Login from './components/Login'
function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:(
          <>
          <Categories/>
          <Main/>
          <>
          <Cards name="Mobiles Phones" category="mobiles"/>
          <Cards name="Bikes" category="bikes"/>
          <Cards name="Watch"  category="watches"/>
          <Cards name="Cars" category="cars"/>
          <Cards name="Fashion" category="fashion"/>
          <Cards name="Animals" category="animals"/>
          </>
          <Footer/>
          </>
        ),
      },
      {
        path:"/product/:productId",
        element:<Product/>
      },
      {
        path:"/display/:displayId",
        element:<InnerCardsDisplay/>
      },
      {
        path:"/viewmore/:productId",
        element:<Product/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]

  }])
  return (
   <>
   <RouterProvider router={router}/>
  
   </>
  )
}

export default App