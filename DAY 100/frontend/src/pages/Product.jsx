import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { asyncupdateuser } from '../store/actions/userActions';

export const Product = () => {
  // const products = useSelector((state) => state.productReducer.products);

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products);
  const dispatch = useDispatch();

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
    products.length > 0 ? <div className=' overflow-auto flex flex-wrap'>{renderproduct}</div> : "Loading..."
  )
}

export default Product