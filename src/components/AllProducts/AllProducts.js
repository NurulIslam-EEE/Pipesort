
import React, { useEffect, useState } from 'react'

import SingleProduct from '../SingleProduct/SingleProduct'
import './AllProducts.css'


export const AllProducts = ({filterProducts}) => {
  // const {filterProducts}=useProducts([])
  // const [products,setProducts]=useState(filterProducts)


 console.log('all product',filterProducts)

  return (
      <div className='productContainer'>
       {filterProducts?.map((d,i)=> <SingleProduct key={i} product={d}/>)}
      </div>
     
   
  )
}


