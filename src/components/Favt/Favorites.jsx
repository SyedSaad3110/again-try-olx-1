import React from 'react'
import './Favorites.css';
import { NavLink } from 'react-router-dom';

function Favorites({favorites,  toggleFavorite}) {

  return (
    <>
     <section>
        <div className="fav-section">
     <div className='fav-name'>
      <h1>Favorites Item's</h1>
      <div>
      <div className="cards_container">
        {favorites.map((item, value) => (
            <div className="box" key={value}>
            <div className="images">
             <NavLink to={`/display/${item.id}`}>
             {<img src={item.img || item.imageURLs}  alt="" />}
             </NavLink>
            <div className="prices">
              <span>{item.price}</span>
              <i className={`fa-regular fa-heart ${toggleFavorite ? "fa-solid fa-heart" : ''}`}
              onClick={() => toggleFavorite(item)}
              style={{ cursor: 'pointer' }}
              ></i>
             </div>
             <div className="text_container">
              <div className="text">
              {`${ item.text || item.description}`} 
              </div>
              <div className="country">
              {item.country || item.location}
              </div>
              <div className="time">
              {item.time || "10 sec ago"}
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