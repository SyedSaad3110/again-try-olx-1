import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Main from './components/Main';
import Layout from './Layout';
import Product from './components/Product';
import InnerCardsDisplay from './components/InnerCardsDisplay';
import Cards from './components/Cards';
import Login from './components/Login';
import SellProduct from './components/SellProduct';
import { useFirebase } from './components/Firebase/FirebaseContext';
import SellProductSelection from './components/SellProductSelection';
import HomePage from './components/HomePage';
function App() {

  const firebase = useFirebase();

  if(firebase.isLoggedIn === false){
    return(
      <>
      <Login/>
      </>
    )
  }

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
          <Cards name="Mobiles" category="mobiles"/>
          <Cards name="Bikes" category="bikes"/>
          <Cards name="Watch"  category="watches"/>
          <Cards name="Cars" category="cars"/>
          <Cards name="Fashion" category="fashion"/>
          <Cards name="Animals" category="animals"/>
          </>

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
        path:"/sell",
        element:<SellProduct/>
      },
      {
        path:"/sellproducttype/:sellproducttypeId",
        element:<SellProductSelection/>
      },
      {
        path:'/sellinglist',
        element:<HomePage/>,
      },
    ]

  }])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App