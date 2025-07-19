import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../api/axiosconfig';
import InfiniteScroll from "react-infinite-scroll-component";
import { loadlazyproduct } from '../store/reducers/productSlice';
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));

export const Product = () => {
  // const products = useSelector((state) => state.productReducer.products);

  
  // const products = useSelector((state) => state.productReducer.products);
  // console.log(products);

  const products = useSelector((state) => state.productReducer.products);
  const [hasMore, sethasMore] = useState(true);
  const dispatch = useDispatch();
  
  const fetchproducts = async () => 
  {
    try
    {
      const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`);
      console.log(data);
      if (data.length == 0) 
      {
        sethasMore(false);
      }
      else
      {
        sethasMore(true);
        dispatch(loadlazyproduct(data));
      } 
    }
    catch (error)
    {
      console.log(error);
    }
  }

  useEffect(()=> 
  {
    fetchproducts();
  }, []);

  

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