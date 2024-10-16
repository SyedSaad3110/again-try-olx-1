import React, { useContext } from 'react'
import { Context } from '../Context'
import { useParams } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import ProductDisplayTop from './ProductDisplayTop';

function Product() {
    const {allData} = useContext(Context);
    const {productId} = useParams();


    const filteredProducts = allData.filter((items)=> items.cate === productId) 

  return (
    <>
     <div>
        <ProductDisplayTop/>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(items => (
            <ProductDisplay id={items.id} img={items.img} price={items.price} text={items.text} country={items.country} time={items.time} cate={items.cate}/>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
   
    </>
  )
}

export default Product