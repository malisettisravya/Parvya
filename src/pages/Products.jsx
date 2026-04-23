import React, { useEffect, useState } from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { cartItems, addToCart, increaseQty, decreaseQty, removeFromCart } = useCart();

  // 🔹 Create fast lookup map for cart items
  const cartMap = new Map(cartItems.map(item => [item.id, item]));

  // 🔹 Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);

      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="flex flex-col gap-6">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Products</h1>

        
      <div className="flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white rounded font-medium text-sm hover:bg-red-700 transition-colors">
     <button onClick={() => navigate("/cart")}>
      <ShoppingCart size={16} /> {/* Icon size adjusted for button */}
    </button>
      </div>
      </div>

      {/* 🔹 GRID */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => {

          const cartItem = cartMap.get(item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div
              key={item.id}
              className="border border-slate-200 rounded-xm p-3 bg-white shadow-sm flex flex-col gap-2"
            >
              
              <div className="w-full h-40 bg-slate-100 rounded-lg overflow-hidden relative">

  {/* ✅ BADGE — MUST BE HERE */}
  {quantity > 0 && (
    <span className="absolute top-1 right-2 bg-indigo-900 text-white text-[10px] px-1.5 py-[2px] rounded-full font-medium leading-none">
      {quantity} in cart
    </span>
  )}

  {/* IMAGE */}
  <img
    src={item.image}
    alt={item.title}
    className="w-32 h-32 object-contain"
  />
</div>
              {/* 🔹 DETAILS */}
              <div className="h-10 mb-2"> {/* Fixed height (h-10) ensures 1-line and 2-line names take same space */}
  <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-tight">
    {item.title}
  </h3>
</div>
            


<div className="flex items-center justify-between py-0">
              <p className="text-base text-slate-900 font-bold">
                ₹{item.price}
              </p>

              {/* 🔹 ACTIONS */}
              {quantity === 0 ? (
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    })
                  }
                  className="bg-red-500 text-white  text-xs px-1 py-1 rounded "
                >
                  Add
                </button>
              ) : (
                <div className="flex items-center gap-2 mt-2">

                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        decreaseQty(item.id);
                      } else {
                        removeFromCart(item.id);
                      }
                    }}
                    className="w-5 h-4.5 bg-red-600 text-white rounded"
                  >
                    −
                  </button>

                  <span className="font-bold">{quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-5 h-4.5 bg-green-600 text-white rounded"
                  >
                    +
                  </button>

                </div>
              )}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;