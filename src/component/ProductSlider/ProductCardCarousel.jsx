import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { toggleWishlist } from "../../Redux/wishlistSlice";
export const ProductCardCarousel = ({ product, content = true }) => {
  const { id, title, image, price } = product;

  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist.ids);

  const isFav = wishlistIds.includes(id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
    toast.success("Added to cart 🛒");
  };

  const handleWishlist = () => {
    dispatch(toggleWishlist(id));
    toast(isFav ? "Removed from wishlist 💔" : "Added to wishlist ❤️");
  };

  return (
    <div className="group bg-white dark:bg-transparent rounded-xl overflow-hidden shadow hover:shadow-md transition min-w-[250px] snap-start">
      {content ? (
        <>
          {/* Image */}
          <div className="relative h-64 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover p-4"
            />

            {/* Wishlist */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleWishlist();
              }}
              className="
            absolute top-3 right-3
            size-9
            bg-slate-400/80
            backdrop-blur
            rounded-full
            flex items-center justify-center
            shadow
            hover:scale-110
            transition
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isFav ? "red" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className={`size-5 transition ${
                  isFav ? "text-red-600" : "text-white"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
              className="
    absolute bottom-3 left-3 right-3
    bg-black text-white
    py-2 rounded
    opacity-0
    translate-y-2
    group-hover:opacity-100
    group-hover:translate-y-0
    transition-all
    duration-300
  "
            >
              Add to Cart
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm dark:text-slate-200 line-clamp-2">{title}</p>

            <p className="font-bold mt-2 text-slate-900">EGP {price}</p>
          </div>
        </>
      ) : (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )}
    </div>
  );
};
