import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../Data';
import SellProductType from './SellProductType/SellProductType';

function SellProductSelection() {
    const {sellproducttypeId} = useParams();
// ============================================
    const items = categories.find((items)=> items.id === Number(sellproducttypeId));
  
  return (
    <>
   
    <SellProductType img={items.img} name={items.name} />
    </>
  )
}

export default SellProductSelection