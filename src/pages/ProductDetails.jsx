import { Button } from "flowbite-react";
import React from "react";
import { HiOutlineChevronDoubleDown, HiPlus } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { handleAddToCart } from "../components/home/ProductCard";
import Rating from "../components/home/Rating";
import { useFetch } from "../hooks/useFetch";
import { getSingleProduct } from "../services/apiServices";

function ProductDetails({ cart, setCart }) {
  const params = useParams();
  const { loading, data, error } = useFetch(() => {
    return getSingleProduct(params.id);
  });

  // const [loading, setLoading] = useState(true);
  // const [product, setProduct] = useState(null);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   getSingleProduct(params.id)
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <HiOutlineChevronDoubleDown className="text-5xl animate-bounce" />
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-[400px] overflow-hidden border border-gray-300 rounded p-4">
        <img src={data.image} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{data.title}</h2>
        <p>{data.description}</p>
        <p>Category: {data.category}</p>
        <Rating rating={data.rating.rate} count={data.rating.count} />
        <p className="text-xl">${data.price}</p>
        <Button
          className="w-fit mt-8"
          onClick={(e) => {
            handleAddToCart(e, data, cart, setCart);
          }}
        >
          <HiPlus className="h-5 w-5 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
