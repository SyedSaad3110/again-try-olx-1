import React from 'react'
import { NavLink } from 'react-router-dom'

function Items({id , img , country , price , text ,time, cate }) {
  return (
    <>
     <div className="box">
                  <div className="images">
                    <NavLink to={`/display/${id}`}><img src={img} alt="" /></NavLink>
                  <div className="prices">
                        <span>{price}</span>
                    <i class="fa-regular fa-heart"></i>
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