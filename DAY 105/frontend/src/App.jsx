import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproduct } from "./store/actions/productActions";

const App = () => {

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() =>
  {
    !users && dispatch(asynccurrentuser());
  }, [users]);

  useEffect(() =>
  {
    
    products.length ==0 && dispatch(asyncloadproduct());
  }, [products]);


  return (
    <div className=" overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800 ">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App;