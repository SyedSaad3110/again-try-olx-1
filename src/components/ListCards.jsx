
import React from 'react';
import './ListingCards.css'
function ListCards({items,favorites, toggleFavorite}) {
  return (
    <>
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
                      <i
                    className={`fa-heart ${favorites.some(fav => fav.id === items.id) ? "fa-solid" : "fa-regular"}`}
                    onClick={() => toggleFavorite(items)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                     </div>
                     <div className="sec-box">
                      <div className="contact">
                      <div className="time-country" style={{display:"flex", alignItems:'center', gap:'12px'}}>
                        <p>{items.location}</p>
                        <p>{items.userName}</p>
                        </div>
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

        </div>
    </>
  )
}

export default ListCards