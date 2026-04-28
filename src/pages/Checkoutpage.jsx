import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Checkout() {
  const { setCart } = useCart();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    addressLine: "",
  });

  const [paymentMethod, setPaymentMethod] = useState(" ");
  const [showPopup, setShowPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { width = 0, height = 0 } = useWindowSize();

  // stop confetti after 10 seconds (clean approach)
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.addressLine) {
      alert("Please fill in all required fields.");
      return;
    }

    setShowPopup(true);
    setShowConfetti(true);
    setCart([]);
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
      {/* Confetti */}
      {showConfetti && <Confetti width={width} height={height} />}
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-slate-900 ">
        Checkout
      </h2>
      {/* Address Section */}
      <div className="space-y-4 text-left">
        {/* Name */}
        <div>
          <label className="text-sm font-semibold text-slate-900">
            Full Name
          </label>
          <input
            className="w-full p-2.5 border rounded-md border-red-500 border-2 bg-white text-slate-900"
            placeholder="John Doe"
            value={address.name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
              setAddress({ ...address, name: value });
            }}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-semibold text-slate-900">
            Phone Number
          </label>
          <input
            className="w-full p-2.5 border rounded-md border-red-500 border-2 bg-white text-slate-900 "
            placeholder="9999999999"
            value={address.phone}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setAddress({ ...address, phone: value });
            }}
          />
        </div>

        {/* City + Pincode */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm font-semibold text-slate-900">City</label>
            <input
              className="w-full p-2.5 border rounded-md border-red-500 border-2 bg-white text-slate-900"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>

          <div className="flex-1">
            <label className="text-sm font-semibold  text-slate-900">
              Pincode
            </label>
            <input
              className="w-full p-2.5  rounded-md border-red-500 border-2 bg-white text-slate-900"
              maxLength={6}
              value={address.pincode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setAddress({ ...address, pincode: value });
              }}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-semibold text-slate-900">
            Detailed Address
          </label>
          <input
            className="w-full p-2.5 rounded-md border-red-500 border-2 bg-white text-slate-900"
            placeholder="Street, area, landmark..."
            value={address.addressLine}
            onChange={(e) =>
              setAddress({ ...address, addressLine: e.target.value })
            }
          />
        </div>
      </div>
      {/* Payment Section */}
      <h3 className="text-lg font-bold mt-8 mb-3 text-gray-800">
        Payment Method
      </h3>
      <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-100">

        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-red-500 focus:ring-red-50 outline-none trasnsistion-all"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          <span className="ml-3 text-gray-700 group-hover:text-black transition-colors">
            Cash on Delivery
          </span>
        </label>
      </div>
      <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-100">
        
        <label className="flex items-center cursor-pointer group">
        
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-red-500"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          <span className="ml-3 text-gray-700 group-hover:text-black transition-colors">
        
            Pay through UPI
          </span>
        </label>
      </div>
      {/* Button */}
      <button
        className="w-full py-3 bg-red-600 text-white rounded-md"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
      {/* Popup */}
{showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-300">
      
      {/* Success Icon */}
      <div className="w-16 h-16 bg-green-100 text-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Text */}
      <h2 className="text-xl font-bold mb-2 text-slate-900">Success!</h2>
      <p className="mb-4 text-slate-900">Your order has been placed successfully.</p>

      {/* Button */}
      <button
        className="w-full py-2 bg-gray-800 text-white rounded-md"
        onClick={() => setShowPopup(false)}
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  );
}
