import React from 'react';
import './SellProduct.css';
import { categories } from '../Data';
import { NavLink } from 'react-router-dom';


function SellProduct() {
    
  return (
    <>
   <section>
   <div className="sellproduct-container">
        <div className="sell-name">
            <h3>Post your add</h3>
        </div>
       <div className="category-container">
       <div className="sell-category">
            <h3>Choose a Category</h3>
            </div>
            <div className="all">
            {
                categories.map((items, value)=>{
           return  <div className="all-cate">
                  <div className="sell-images" key={value}>
                    <NavLink to={`/sellproducttype/${items.id}`}><img src={items.img} alt="" /></NavLink>
                    <NavLink to={`/sellproducttype/${items.id}`} style={{textDecoration:'none' , color:'black', fontWeight:'400'}}><h6>{items.name}</h6></NavLink>
                  </div>
                  <div className="sell-arrow">
                  <NavLink to={`/sellproducttype/${items.id}`} style={{textDecoration:'none' , color:'black'}}><i class="fa-solid fa-angle-right"></i></NavLink>
                  </div>
             </div>
          })
        }   
         </div>
        </div>
    </div>
   </section>
    </>
  )
}

export default SellProduct