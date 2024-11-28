import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products}=useContext(ShopContext)
    const [LatestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
setLatestProducts(products.slice(0,10));
    },[])
    // console.log(product);
    
  return (
    <div className='my-10'>
        <div className="text-center py-9 text-3xl">
            <Tittle text1={'LATEST'} text2={"COLLECTIONS"}/>
<p className="W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolosint quos illo nostrum a necessitatibus, harum fugit ipsa id?</p>
        </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            LatestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name}
                price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
