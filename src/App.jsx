import React,{ useEffect, useState } from 'react';
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
import { messaging } from './components/Firebase/FirebaseContext';
import { getToken,onMessage } from 'firebase/messaging';
import { categories } from './Data';
import Favorites from './components/Favt/Favorites';
function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Request notification permission
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            // generate token
            
          // Get registration token
          const token = await getToken(messaging, {
             vapidKey: "BOTaSUhZSAt6BbTdq2rFAsOethRdMdKEsyVOwYHLjADoipeVNBHLbU-Y-b7PwkQsLbGweZ_gM4CvRKxEUEuPDgk"
             }); 
          console.log("FCM Token:", token);

          // Optional: Save the token to your database or use it as needed
        } else {
          console.log("Notification permission not granted.");
        }
      } catch (error) {
        console.error("Error getting notification permission or token:", error);
      }
    };

    requestPermission();
    // Listen for messages when app is in foreground
    onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      // Handle the message as needed, e.g., display a toast notification
    });
  }, []);

  // ==============================================================================================

  const [allcate, setAllCate] = useState(categories);
  const [search, setSearch] = useState('');
  
  const searchCate = () => {
     const searchFilter = categories.filter((e)=>{
      return e.cate === search
     })
     setAllCate(searchFilter);
  };

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  const toggleFavorite = (item) => {
    // Check if the item is already in favorites
    const itemExists = favorites.some(favItem => favItem.id === item.id);
    
    if (itemExists) {
      // Remove from favorites if it's already there
      setFavorites(favorites.filter(favItem => favItem.id !== item.id));
    } else {
      // Add to favorites if it's not already there
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  // ===========================================================================================

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
    element:<Layout searchCate={searchCate} search={search} setSearch={setSearch}/>,
    children:[
      {
        path:"",
        element:(
          <>
          <Categories/>
          <Main allcate={allcate} search={search}/>
          <>
          <Cards name="Mobiles" category="mobiles" toggleFavorite={toggleFavorite}/>
          <Cards name="Bikes" category="bikes" toggleFavorite={toggleFavorite} />
          <Cards name="Watch"  category="watches" toggleFavorite={toggleFavorite}/>
          <Cards name="Cars" category="cars" toggleFavorite={toggleFavorite} />
          <Cards name="Fashion" category="fashion" toggleFavorite={toggleFavorite} />
          <Cards name="Animals" category="animals" toggleFavorite={toggleFavorite} />
          </>

          </>
        ),
      },
      {
        path:"/product/:productId",
        element:<Product toggleFavorite={toggleFavorite} favorites={favorites}/>
      },
      {
        path:"/display/:displayId",
        element:<InnerCardsDisplay/>
      },
      {
        path:"/viewmore/:productId",
        element:<Product toggleFavorite={toggleFavorite} favorites={favorites}/>
      },
      {
        path:"/sell",
        element:<SellProduct allcate={allcate} search={search}/>
      },
      {
        path:"/sellproducttype/:sellproducttypeId",
        element:<SellProductSelection />
      },
      {
        path:'/sellinglist',
        element:<HomePage toggleFavorite={toggleFavorite} favorites={favorites}/>,
      },
      {
        path:'/favorites',
        element:<Favorites favorites={favorites} toggleFavorite={toggleFavorite}/>,
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