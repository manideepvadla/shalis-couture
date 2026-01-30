import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl">
        <img src={product.imageUrl} className="h-64 w-full object-cover" />
        <div className="p-3">
          <h3 className="text-sm font-semibold truncate">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.brand}</p>
          <p className="font-bold">₹{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
