import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/userActions';

const Cart = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);
    const products = useSelector((state) => state.productReducer.products);
    

    const IncreaceQuantityHandler = (product, index) =>
    {
        const copyuser = { ...users, cart: [...users.cart] };
        copyuser.cart[index] = { ...copyuser.cart[index], quantity: copyuser.cart[index].quantity + 1,};
        dispatch(asyncupdateuser(copyuser.id, copyuser));
    }

    const DecreaceQuantityHandler = (product, index) =>
    {
        const copyuser = { ...users, cart: [...users.cart] };
        if (users.cart[index].quantity > 0)
        {
            copyuser.cart[index] = { ...copyuser.cart[index], quantity: copyuser.cart[index].quantity - 1,}; 
        }
        else
        {
            copyuser.cart.splice(index, 1);
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser));
    }

    const cartIterms = users.cart.map((c, index) => 
    {
        console.log(c);
        return (
            <li className='flex items-center justify-between mb-10 bg-gray-600 p-5 rounded' key={c.product.id}>
                <img className='w-[10vmax] h-[10vmax]' src={c.product.image} alt="" />
                <span>{c.product.title}</span>
                <span>{c.product.price}</span>
                <p>
                    <button onClick={() => DecreaceQuantityHandler(c, index)} className=' text-2xl cursor-pointer'>-</button>
                    <span className=' mx-3 p-2 rounded bg-gray-700'>{c.quantity}</span>
                    <button onClick={() => IncreaceQuantityHandler(c, index)} className=' text-xl cursor-pointer'>+</button>
                </p>
            </li>
        )
        
    })
  return (
    <div>{cartIterms}</div>
  )
}

export default Cart