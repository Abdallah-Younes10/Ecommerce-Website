import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { removeFromCart, clearCart, incrementQty, decrementQty } from "../Redux/cartSlice";
import Drawer from "./Drower";
import { useState } from "react";
import { ProductModal } from "@/component/Products/ProductModal";

const CartDrawer = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <Drawer icon={<ShoppingCartIcon className="w-6 h-6" />} title="Your Cart" badgeCount={items.length}>
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 ml-2 text-slate-500">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  <p className="text-sm font-bold">EGP {item.price * item.qty}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <button onClick={() => dispatch(incrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  <button onClick={() => dispatch(decrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600 hover:underline text-sm">Remove</button>
                  <button onClick={() => setSelectedProduct(item)} className="text-xs underline text-blue-600">Quick View</button>
                </div>
              </div>
            ))}

            <div className="text-right font-bold text-lg mt-2">Total: EGP {total}</div>
            <button onClick={() => dispatch(clearCart())} className="w-full bg-red-600 text-white py-2 rounded mt-2">
              Clear Cart
            </button>
          </div>
        )}
      </Drawer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

export default CartDrawer;
