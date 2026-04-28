import { useMemo } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0,
      ),
    [cartItems],
  );

  return (

    /* Changed max-width to max-w-7xl to allow for the wide side-by-side look */
    <div className="max-w-7xl mx-auto text-slate-900 p-6">
      {/* 1. THE GRID CONTAINER - This creates the side-by-side effect */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
        {/* LEFT CARD: PRODUCT LIST */}
        <div className="lg:col-span-2 pt-7 ">
          <h2 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
            My Cart ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-slate-500 italic">No items in cart</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {cartItems.map((item) => (
                <div key={item.id} className="py-3 flex gap-1 items-center">
                  {/* Image Box */}
                  <div className="w-20 h-20 flex-shrink-0 bg-white border border-slate-100 rounded-md p-1 flex items-center justify-center shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  {/* Product Info - flex-1 pushes buttons to the right */}
                  <div className="flex-1">
                    <h3 className="font-small text-xs">
                      {item.title || item.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-2">
                      Unit Price: ₹{item.price}
                    </p>
                    <p className="font-medium text-slate-800">
                      Subtotal: ₹
                      {(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-slate-50 p-1">
                    <button
                      onClick={() => {
                        if (item.quantity > 1) decreaseQty(item.id);
                        else removeFromCart(item.id);
                      }}
                      className="w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      −
                    </button>

                    <span className="font-bold w-2 text-center">
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CARD: COST SUMMARY */}
        <div className="lg:col-span-1 bg-white border border-slate-100 rounded-xl p-7 shadow-md sticky top-10">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
            Order Summary
          </h3>

          {/* <div className="space-y-2"> */}
          <div className="flex justify-between text-slate-700">
            <span>Items Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 border-b pb-4">
            <span>Delivery Fee</span>
            <span className="text-green-600 font-medium">FREE</span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xm font-normal">Total Amount</span>
            <span className="text-xl font-black text-slate-900">
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>

          <button
  className="w-52 bg-slate-900 text-white text-sm py-2 rounded font-normal mt-10 hover:bg-slate-800 transition-transform active:scale-95"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Cart;
