import { XMarkIcon } from "@heroicons/react/24/outline";
import { addToCart } from "@/Redux/cartSlice";
import { toggleWishlist } from "@/Redux/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

export const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const wishlistIds = useSelector((s) => s.wishlist.ids);

  if (!product) return null;

  const isFav = wishlistIds.includes(product.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
    toast.success("Added to cart 🛒");
  };

  const handleWishlist = () => {
    dispatch(toggleWishlist(product.id));
    toast.success(
      isFav ? "Removed from wishlist 💔" : "Added to wishlist ❤️"
    );
  };

  return (
    
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-500 max-w-3xl w-full rounded-lg p-6 relative animate-fadeIn"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:scale-110 transition"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded"
          />

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold dark:text-white">{product.title}</h2>

            <p className="text-body mt-2 line-clamp-5">
              {product.description}
            </p>

            <p className="mt-4 text-2xl font-bold">
              ${product.price}
            </p>

            <p className="text-sm mt-1 text-gray-600">
              ⭐ {product.rating} · {product.brand}
            </p>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-2 rounded hover:bg-black/90 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={handleWishlist}
                className={`px-4 py-2 rounded border transition ${
                  isFav
                    ? "border-red-500 text-red-500"
                    : "border-gray-300"
                }`}
              >
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};
