import { jsxs } from "react/jsx-runtime";
import  axios  from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";


export const asynccurrentuser = () => async(dispatch, getState) =>
{
    try
    {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loaduser(user));
        else console.log("User Not Logged In!!");
    }
    catch (error)
    {
        console.log(error);
    }

}


export const asynclogoutuser = () => async(dispatch, getState) =>
{
    try
    {
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("User Logged Out!!");   
    }
    catch (error)
    {
        console.log(error);
    }

}


export const asyncloginuser = (user) => async(dispatch, getState) =>
{
    try
    {
        const { data } = await axios.get(`/users?email=${user.email}&password = ${user.password}`);
        console.log(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]));
    }
    catch (error)
    {
        console.log(error);
    }

}

export const asyncregisteruser = (user) => async(dispatch, getState) =>
{
    try
    {
        const res = await axios.post("/users", user);
        console.log(res);
    }
    catch (error)
    {
        console.log(error);
    }

}

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
  try 
  {
        const res = await axios.patch("/users/"+ id, user);
        const updatedUser = res.data;
        // console.log("Updated user:", updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        dispatch(asynccurrentuser());
  } 
  catch (error) 
  {
        console.error("Error updating user:", error);
  }
};

export const asyncdeleteuser = (id) => async(dispatch, getState) =>
{
    try
    {
        const data = await axios.delete("/users/" + id);
        dispatch(asynclogoutuser());
        
    }
    catch (error)
    {
        console.log(error);
    }

}

export default asyncregisteruser;