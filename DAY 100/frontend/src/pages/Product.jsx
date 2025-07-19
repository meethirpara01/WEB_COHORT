import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { asyncupdateuser } from '../store/actions/userActions';
import axios from '../api/axiosconfig';
import InfiniteScroll from "react-infinite-scroll-component";

export const Product = () => {
  // const products = useSelector((state) => state.productReducer.products);

  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productReducer.products);
  // console.log(products);
  const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  
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
        setproducts([...products, ...data]);
      } 
    }
    catch (error)
    {
      console.log(error);
    }
  }

  
  const dispatch = useDispatch();

  useEffect(()=> 
  {
    fetchproducts();
  }, []);

  const AddtoCartHandler = (product) =>
  {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);
    console.log(x);
    if (x == -1) 
    {
      copyuser.cart.push({ product, quantity: 1 });
    }
    else
    {
      copyuser.cart[x] = { product, quantity: copyuser.cart[x].quantity + 1,};
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
    // console.log(copyuser);
  };

  const renderproduct = products.map((product) =>
  {
    return (
      <div className=' w-[31%] mr-3 mb-3 border shadow' key={product.id}>
        <img className='w-full h-[30vh] object-cover rounded' src={product.image} alt='' />
        <h1>{product.title}</h1>
        <small>{product.description.slice(0, 100)}...</small>
        <div className='p-3 mt-3 flex justify-between items-center'>
          <p>{product.price}</p>
          <button onClick={() => AddtoCartHandler(product)} className=' px-4 py-1 bg-blue-400 rounded cursor-pointer '>Add To Cart</button>
        </div>
        <Link className=' block m-auto w-1/2' to={`/product/${product.id}`}>More Info..</Link>
      </div>
    );

  }
  )
  
  return ( 
     <InfiniteScroll  dataLength={products.length} next={fetchproducts()} hasMore={hasMore} loader={<h4>Loading...</h4>} endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
        <div className=' overflow-auto flex flex-wrap'>
          <Suspense fallback={ <h1 className=" text-center text-5xl text-yellow-500">LOADING...</h1> }>
            {renderproduct}
          </Suspense>
          
        </div>
      </InfiniteScroll>
  )
}

export default Product