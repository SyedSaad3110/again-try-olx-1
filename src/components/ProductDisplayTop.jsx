import React from 'react';
import './ProductDisplayTop.css'
import ProductDisplay from './ProductDisplay';

function ProductDisplayTop() {
  return (
    <>
    <div className="banner">
        <img src="https://tpc.googlesyndication.com/simgad/6155991550825742807" alt="" />
    </div>
    <div className="main-container">
        <div className="left-container">
            <div className="name">Home</div>
            <div className="details">
                <h5>Mobiles in Pakistan</h5>
                <p>10,000+ ads</p>
            </div>
            <div className="display-container">
           <div className="first-box">
                <div className="box">
                    <h5>Categories</h5>
                    <p>All Categories</p>
                    <h5>Mobile</h5>
                    <ul>
                        <li>Mobiles Phones (26829)</li>
                        <li>Accessories (26829)</li>
                        <li>Smart Watch (26829)</li>
                        <li>Tablets (26829)</li>
                    </ul>
                </div>
            </div> 
           </div>

        </div> 
    </div>
    <ProductDisplay/>
    </>
  )
}

export default ProductDisplayTop