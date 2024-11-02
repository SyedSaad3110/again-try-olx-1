
import React, { useState, useEffect } from 'react';
import './ListingCards.css'

function ListCards({items}) {
  return (
    <>
    <section>
      <div className="card-container">
                      <div className="img">
                       {items.imageURLs && items.imageURLs.length > 0 ? (
                        items.imageURLs.map((url, index) => (
                         <img key={index} src={url} alt={`Listing Image ${index}`} />
                        ))
                        ) : (
                        <p>No images available</p>
                          )} 
                           </div>
                      <div className="all-context-container">
                      <div className="first-box">
                      <div className="price">
                        <h4>{items.price}</h4>
                        <h6>{items.description}</h6>
                      </div>
                     </div>
                     <div className="sec-box">
                      <div className="contact">
                        <p>{items.location}<span>     {items.userName}</span></p>
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
                 {/* </div> */}

        </div>
        </section>
    </>
  )
}

export default ListCards