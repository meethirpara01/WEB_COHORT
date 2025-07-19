import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axiosconfig';
import { loadlazyproduct } from '../store/reducers/productSlice';

const useInfiniteProducts = () => {

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
    

  return {products, hasMore, fetchproducts};
}

export default useInfiniteProducts