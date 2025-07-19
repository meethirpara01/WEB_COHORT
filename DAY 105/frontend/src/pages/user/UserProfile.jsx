import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';

const UserProfile = () => {


    const { users }  = useSelector((state) => state.userReducer);
  

    const {register, reset, handleSubmit} = useForm({
        defaultValues: {
        username: users?.username,
        email: users?.email,
        password: users?.password,
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UpdateUserHandler = (user) =>
    {
        dispatch(asyncupdateuser(users.id, user))
        navigate("/login")
    }

    const LogoutUserHandler = () =>
    {
        dispatch(asynclogoutuser());
        navigate("/login");
    }

    const DeleteUserHandler = () =>
    {
        dispatch(asyncdeleteuser(users.id));
        navigate("/login");
    }

  return users ? (
    <div>
        <h1 className=' font-thin text-gray-400 text-5xl mb-1'>{users.username}</h1>
        <h1 className=' font-thin text-gray-500 text-xl'>{users.email}</h1>
        <hr className=' mt-10 mb-10' />
       <form onSubmit={handleSubmit(UpdateUserHandler)} className=' flex flex-col w-1/2 justify-start items-start'>
          <input {...register("username")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='John-Doe' />
          <input {...register("email")} className=' outline-0 border-b p-2 text-3xl' type="email" placeholder='john@doe.com' />
          <input {...register("password")} className=' outline-0 border-b p-2 text-3xl' type="password" placeholder='*******' />
          <button className='mt-5 px-4 py-2 bg-blue-400 rounded cursor-progress'>Update User</button>
          <button type="button" onClick={LogoutUserHandler} className='mt-5 px-4 py-2 bg-red-400 rounded cursor-pointer '>Logout User</button>
          <button type="button" onClick={DeleteUserHandler} className='mt-5 px-4 py-2 bg-red-600 rounded cursor-progress'>Delete User</button>
        </form>
    </div>
  ) : ( "Loading..." );
}

export default UserProfile