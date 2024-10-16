import React, { useContext } from 'react'
import { Context } from '../Context'
import { useParams } from 'react-router-dom';
import InnerCards from './InnerCards';

function InnerCardsDisplay() {

    const {all_cards} = useContext(Context);
    const {displayId} = useParams();

    const items = all_cards.find((items)=> items.id === Number(displayId))
  return (
    <>
     {items ? (
                <InnerCards id={items.id} img={items.img} price={items.price} text={items.text} country={items.country} time={items.time} cate={items.cate} />
            ) : (
                <p>Product not found.</p>
            )}
    </>
  )
}

export default InnerCardsDisplay