import { addToCart } from "@/Redux/cartSlice";
import { toggleWishlist } from "@/Redux/wishlistSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, onSelect }) => {
  const {
    id,
    title,
    description,
    price,
    rating,
    image,
    brand,
    availabilityStatus,
  } = product;

  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist.ids);
  const isFav = wishlistIds.includes(id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ id, title, price, image }));
    toast.success("Added to cart 🛒");
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(id));
    toast.success(isFav ? "Removed from wishlist 💔" : "Added to wishlist ❤️");
  };
  const handleOpenModal = (e) => {
    e.stopPropagation();
    onSelect(product);
  };

  return (
    <div
      
      className="relative group cursor-pointer bg-neutral-primary-soft max-w-sm p-6 border border-default rounded-base shadow-xs flex flex-col"
    >
      <div className=" relative">
        {/* Image */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/placeholder.png")}
          className="rounded-xl w-full h-78 object-cover relative"
        />

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 size-9 opacity-0 group-hover:opacity-100 bg-slate-400/80 backdrop-blur rounded-full flex items-center justify-center shadow hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFav ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className={`size-5 ${isFav ? "text-red-600" : "text-white"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        {/* see modal */}
        {/* See details */}
        <button
          onClick={handleOpenModal}
          className="absolute top-16 right-3 size-9 bg-slate-400/80 opacity-0 group-hover:opacity-100 backdrop-blur rounded-full flex items-center justify-center shadow hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 bg-black text-white py-2 rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      {/* Content */}
     <Link to={`/product/${id}`}>
       <div className="flex-1 mt-4">
        <h5 className="mb-2 text-xl font-semibold text-heading">{title}</h5>
        <p className="mb-4 text-body line-clamp-3">{description}</p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <div>
          <p className="text-heading font-semibold">${price}</p>
          <p className="text-xs text-body">
            ⭐ {rating} · {brand}
          </p>
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full border ${
            availabilityStatus === "In Stock"
              ? "text-green-600 border-green-600"
              : "text-red-600 border-red-600"
          }`}
        >
          {availabilityStatus}
        </span>
      </div>
     </Link>
    </div>
  );
};
