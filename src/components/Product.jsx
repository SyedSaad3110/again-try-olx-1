import React, { useContext } from 'react'
import { Context } from '../Context'
import { NavLink, useParams } from 'react-router-dom';
import './Product.css'

function Product() {
    const {allData} = useContext(Context);
    const {productId} = useParams();


    const filteredProducts = allData.filter((items)=> items.cate === productId) 
    

  return (
    <>
    <section>
    <div className="banner">
        <img src="https://tpc.googlesyndication.com/simgad/6155991550825742807" alt="" />
    </div>

    <div className="main-container-product">

    <div className="left-container">
        <div className="images-product">
        <img className='first-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4GqIWYzX9VBvePtP92neF064So3bwqM1JQ&s" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUpjaJ6ggRGuoa6XKcrAKG_sYuhnUz5Xb_w&s" alt="" />
        </div>
     </div>

        <div className="right-container">
          {
            filteredProducts.length > 0 ? (
              filteredProducts.map((items, value)=> (
                 <div className="card-container" key={value}>
                     <div className="img">
                      <NavLink to={`/display/${items.id}`}><img src={items.img} alt="" /></NavLink>
                      </div>
                      <div className="all-context-container">
                      <div className="first-box">
                      <div className="price">
                        <h4>{items.price}</h4>
                        <h6>{items.text}</h6>
                      </div>
                     </div>
                     <div className="sec-box">
                      <div className="contact">
                        <p>{items.country}<span>     {items.time}</span></p>
                        <div className="call-msg">
                          <div className="call-box">
                          <i class="fa-solid fa-phone"></i>
                          <h6>Call</h6>
                          </div>
                          <div className="call-box msg-box">
                          <i class="fa-regular fa-comment-dots"></i>
                          <h6>Chat</h6>
                          </div>
                        </div>
                      </div>
                     </div>
                      </div>
                     {/* <div className="heart">
                     <i class="fa-regular fa-heart"></i>
                     </div> */}
                 </div>
              ))
            ):
            <h3>No products found in this category</h3>
          }
        </div>
    </div>
    </section>
   
    </>
  )
}

export default Product