import { useDispatch } from "react-redux";
import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

export const asyncgetproducts = () => async (dispatch, getState) => 
{
    console.log("Currente State >>>>", getState());
    

    try
    {
        const res = await axios.get("/users");
        // console.log(res);
        dispatch(loaduser(res.data));
    }
    catch (error)
    {
        console.log(error);
    }
};