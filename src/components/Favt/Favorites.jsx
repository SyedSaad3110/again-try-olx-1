import React, { useContext } from 'react'
// import { Context } from '../../Context'
// import { NavLink } from 'react-router-dom'
import './Favorites.css'

function Favorites({favorites,  toggleFavorite}) {

    // const { favorites } = useContext(Context)
    // const handleRemoveToFavorites = () => {
    //        removeToFavorites({ id, img, country, price, text, time });
    // };
  return (
    <>
     <section>
        <div className="fav-section">
     <div className='fav-name'>
      <h1>Favorites Item's</h1>
      <div>
      <div className="cards_container">
        {favorites.map((item) => (
            <div className="box">
            <div className="images">
             <img src={item.img} alt="" />
            <div className="prices">
              <span>{item.price}</span>
              <i className={`fa-regular fa-heart ${toggleFavorite ? "fa-solid fa-heart" : ''}`}
              onClick={() => toggleFavorite(item)}
              style={{ cursor: 'pointer' }}
              ></i>
             </div>

             <div className="text_container">
              <div className="text">
               {item.text}
              </div>
              <div className="country">
              {item.country}
              </div>
              <div className="time">
              {item.time}
              </div>
             </div>   
            </div>
           </div>
        ))}
        </div>
      </div>
    </div>
    </div>
     </section>
    </>
  )
}

export default Favorites