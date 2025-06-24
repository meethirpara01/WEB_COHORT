import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ServiceUpdate = () => {

    const navigate = useNavigate();
    
    
  return (
    <div>
        <h1 className=' text-4xl font-thin mb-3'>Update Services</h1>
        <h2 className=' text-2xl font-thin mb-5'>Choose Us...</h2>
        <button onClick={() => navigate(-1)} className=' mr-3 cursor-pointer bg-white text-black px-4 py-2 rounded'>Go Back</button>
        <button onClick={() => navigate("/product")} className=' cursor-pointer bg-white text-black px-4 py-2 rounded'>Go To Product</button>
    </div>
  )
}

export default ServiceUpdate