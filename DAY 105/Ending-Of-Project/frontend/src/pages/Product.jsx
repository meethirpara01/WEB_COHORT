import React, { lazy, Suspense, useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from '../utils/useInfiniteProducts';

const ProductTemplate = lazy(() => import('../components/ProductTemplate'));

export const Product = () => {
  // const products = useSelector((state) => state.productReducer.products);

  
  // const products = useSelector((state) => state.productReducer.products);
  // console.log(products);

  const { products, hasMore, fetchproducts} =useInfiniteProducts()

  

  

  // const renderproduct = products.map((product) => <ProductTemplate key={product.id} product={product} />)
  
  return ( 
     <InfiniteScroll  dataLength={products.length} next={fetchproducts()} hasMore={hasMore} loader={<h4>Loading...</h4>} endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
        <div className=' flex flex-wrap'>
            {products.map((product) => (
              <Suspense key={product.id} fallback={ <h1 className=" text-center text-5xl text-yellow-500">LOADING...</h1> }>
                <ProductTemplate key={product.id} product={product} />
            </Suspense>))}
          
          
        </div>
      </InfiniteScroll>
  )
}

export default Product