import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context'
import Items from './Items';
// import { allData } from '../AllData';

function Cards({name , category}) {
  const {all_cards} = useContext(Context)


  const cardsDisplay = all_cards.filter((items)=> items.cate === category)
  return (
    <CardsSection>  
        <div className="card_name">
            <div className="ri">
            <h2>{name}</h2>
            </div>
            <div className="left">
               <NavLink className='a_tag' to={`/viewmore/${category}`}>View More</NavLink>
               <i class="fa-solid fa-angle-right"></i>
        </div>
        </div>

        <div className="cards_container">
         {cardsDisplay.map((items)=>{
           return  <Items id={items.id} img={items.img} price={items.price} text={items.text} country={items.country} time={items.time} cate={items.cate}/>
          })}
        </div>
    
    
    </CardsSection>
  )
}

export default Cards

const CardsSection = styled.section`
.card_name{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.ri h2{
    font-size:29px;
    font-weight:700;
    letter-spacing: 0.8px;
}
.left{
    display:flex;
    align-items: center;
    gap:15px;
}
.left a{
    font-size:19px;
    font-weight:500;
}
.left i {
    font-size:19px;
    margin-top: 4px;
    color:blue;
}
.a_tag{
    list-style: none;
    text-decoration: none;
    color:blue;
}
.cards_container{
  display: flex;
  overflow-x: auto;
  /* grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); */
  gap:1.5rem;
  padding:20px 0;
  scroll-snap-type: x mandatory;
}
  .cards_container .box{
    text-align:center;
    border: 1px solid #222 ;
    padding: 0px;
    flex: 0 0 auto; /* Prevent cards from shrinking */
    scroll-snap-align: start;
  }
.images img {
    width:100%;
    height:210px;
    object-fit: cover;
}
/* .content_container{
    padding:20px;
} */
.prices{
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding-top:20px;
   padding-left:20px;
   padding-right:20px;
}
.prices span {
    font-size:18px;
    font-weight:650;
}
.prices i {
    font-size:24px;
}
.text_container{
    display:flex;
    /* align-items:center; */
    flex-direction:column;
    text-align:start;
    text-align:flex-start;
}

.text_container .text{
    text-align:start;
    font-size:18px;
    font-weight:420;
    margin-top:12px;
   padding-left:20px;
   padding-right:20px;

}
.text_container .country{
    text-align:start;
    font-size:18px;
    font-weight:400;
    margin-top:14px;
   padding-left:20px;
   padding-right:20px;
}
.text_container .time{
    padding-left:20px;
   padding-right:20px;
   padding-bottom:20px;
}
/* @media(max-width:500px){
    .cards_container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap:1.1rem;
  padding:16px 0;
}
} */



`