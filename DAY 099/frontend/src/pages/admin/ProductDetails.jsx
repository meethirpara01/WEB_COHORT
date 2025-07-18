import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const {productReducer: { products }, userReducer: { users }, } = useSelector((state) => state); 
  const product = products?.find((p) => p.id == id);
  // console.log(product, users);
  

  const {register, reset, handleSubmit} = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      categorty: product?.categorty,
    }
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const UpdateProductHandler = (product) =>
    {
        console.log(product);
        dispatch(asyncupdateproduct(id, product));
        // navigate("/products")
    }

    const DeleteProductHandler = () =>
    {
        console.log(product);
        dispatch(asyncdeleteproduct(id, product));
        navigate("/products")
    }


  return product ?(
    <>
      <div className="w-full flex">
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt={product.title} />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="text-5xl font-thin mb-5">{product.title}</h1>
          <h2 className="text-3xl mb-3">{product.price}</h2>
          <p className=" mb-3">{product.description}</p>
          <button className=" mt-5 px-4 py-2 bg-blue-400 rounded">Add To Cart</button>
        </div> 
      </div>
      <hr />
      {users && users?.isAdmin && <form onSubmit={handleSubmit(UpdateProductHandler)} className=' flex flex-col w-1/2 justify-start items-start'>
          <input {...register("image")} className=' outline-0 border-b p-2 text-3xl' type="url" placeholder='Image URL' />
          <input {...register("title")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='Title' />
          <input {...register("price")} className=' outline-0 border-b p-2 text-3xl' type="number" placeholder='Price' />
          <textarea {...register("description")} className=' outline-0 border-b p-2 text-3xl' placeholder='Enter Description Here'></textarea>
          <input {...register("categorty")} className=' outline-0 border-b p-2 text-3xl' type="text" placeholder='Categorty' />
          <button className='mt-5 px-4 py-2 bg-blue-400 rounded'>Update Product</button>
          <button type="button" onClick={DeleteProductHandler} className='mt-5 px-4 py-2 bg-red-400 rounded'>Delete Product</button>
        </form>}
    </>
  ): "Loading product...";
};

export default ProductDetails;
