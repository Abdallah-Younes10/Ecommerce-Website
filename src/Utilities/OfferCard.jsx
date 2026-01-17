import { useProducts } from "@/Hooks/useProducts";
import { Link } from "react-router-dom";
// import { useProducts } from "../../Hooks/useProducts";

export const OfferCard = ({ title, category, to, linkTitle ,onClick }) => {
  const { data, isLoading } = useProducts({
    url: `https://dummyjson.com/products/category/${category}`,
  });

  const products = data?.data?.slice(0, 4) || [];

  if (isLoading) {
    return (
      <div className="bg-white px-5 py-4 max-w-sm rounded shadow-xs">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-white/30 px-5 py-4 max-w-sm rounded shadow-xs">
      <Link to={to} onClick={onClick}>
        <h5 className="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
          {title}
        </h5>
      </Link>

      <Link to={to} onClick={onClick}>
        <div className="grid grid-cols-2 gap-2">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-30 object-cover rounded-md"
              />
              <p className="mt-1 text-sm text-gray-600 dark:text-white line-clamp-2">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link
          to={to}
          onClick={onClick}
          className="text-sm text-blue-600 dark:text-yellow-400 hover:underline"
        >
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};
