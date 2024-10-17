import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function ProductDisplay({id , img , country , price , text ,time, cate}) {
  return (
    <ProductDisplaySection>
      <div className="card-box">
               <div className="img">
                    <NavLink to={`/display/${id}`}><img src={img} alt="" /></NavLink>
                </div>
                <div className="card-details">
                   <div className="card-container">
                   <div className="price-text">
                        <h5>{price}</h5>
                        <p>{text}</p>
                    </div>
                    <div className="country-contact">
                        <p>{country}</p>
                        <p>{time}</p>
                        <div className="contact-details">
                            <div className="contact-box">
                            <i class="fa-solid fa-phone"></i>
                            <p>Call</p>
                            </div>
                            <div className="contact-box dark-color">
                            <i class="fa-regular fa-comment-dots"></i>
                            <p>Chat</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
               </div>
    </ProductDisplaySection>
  )
}

export default ProductDisplay

const ProductDisplaySection = styled.section`
.img img{
    width:400px;
    height:300px;
}
@media(max-width:604px) {
  .card-container{
    display: none;
  }
  .card-box{
    border: none;
  }
}
/* .card-box{
  width:100%;
} */
`