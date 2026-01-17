import { useSelector, useDispatch } from "react-redux";
import { HeartIcon } from "@heroicons/react/24/outline";
import { toggleWishlist, clearWishlist } from "../Redux/wishlistSlice";
import Drawer from "./Drower";
import { useState } from "react";
import { ProductModal } from "@/component/Products/ProductModal";

const WishlistDrawer = ({ products = [] }) => {
  const ids = useSelector((state) => state.wishlist.ids);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const wishlistItems = products.filter((p) => ids.includes(p.id));


  return (
    <>
      <Drawer icon={<HeartIcon className="w-6 h-6" />} title="Your Wishlist" badgeCount={ids.length}>
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty</p>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 ml-2">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.qty ?? 1}</p>
                  <p className="text-sm font-bold">EGP {item.price}</p>
                  <button onClick={() => setSelectedProduct(item)} className="text-xs underline text-blue-600 mt-1">
                    Quick View
                  </button>
                </div>
                <button onClick={() => dispatch(toggleWishlist(item.id))} className="text-red-600 hover:underline text-sm">
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => dispatch(clearWishlist())} className="w-full bg-red-600 text-white py-2 rounded mt-2">
              Clear Wishlist
            </button>
          </div>
        )}
      </Drawer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

export default WishlistDrawer;
