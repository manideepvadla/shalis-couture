import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 md:flex gap-6">
      <img src={product.imageUrl} alt="no-image" className="w-full md:w-1/2" />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-500">{product.brand}</p>
        <p className="text-xl font-bold mt-2">₹{product.price}</p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
