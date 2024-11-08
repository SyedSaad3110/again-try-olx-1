import React, { useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import styled from 'styled-components';
import { ref } from 'firebase/storage';
import { Context } from '../Context';

function Items({id , img , country , price , text ,time, cate,toggleFavorite }) {
   
  // const [isFavorite, setIsFavorite] = useState(false);
  const [isFavorite, setIsFavorite] = useState();

  const handleToggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    toggleFavorite({ id, img, country, price, text, time });
  };

  return (
    <>
     <div className="box">
                  <div className="images">
                    <NavLink to={`/display/${id}`}><img src={img} alt="" /></NavLink>
                  <div className="prices">
                        <span>{price}</span>
                    <i className={`fa-regular fa-heart ${isFavorite ? "fa-solid fa-heart" : ''}`}
                    onClick={handleToggleFavorite}
                    style={{ cursor: 'pointer' }}
                    ></i>
                   </div>
                   <div className="text_container">
                    <div className="text">
                     {text}
                    </div>
                    <div className="country">
                    {country}
                    </div>
                    <div className="time">
                    {time}
                    </div>
                   </div>   
                  </div>
                 </div>
    </>
  )
}

export default Items