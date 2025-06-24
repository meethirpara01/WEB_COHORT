import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className=' text-5xl font-thin mb-5'>Service</h1>
      <button onClick={() => navigate("/Service/detail")} className=' mr-3 cursor-pointer bg-white text-black px-4 py-2 rounded'>More Details</button>
      <button onClick={() => navigate("/Service/update")} className=' cursor-pointer bg-white text-black px-4 py-2 rounded'>Update Services</button>
      <hr className=' my-10' />
      <Outlet />

    </div>
  )
}

export default Service