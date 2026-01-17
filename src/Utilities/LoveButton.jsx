import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import toast, { Toaster } from "react-hot-toast";

const LoveButton = ({text, className = "" }) => {

   const [isFav, setIsFav] = useState(false);

  // تحميل حالة المفضلة من localStorage
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFav(wishlist.includes(text));
  }, [text]);

  // تحديث localStorage عند تغيير isFav
  const toggleFav = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isFav) {
      const updated = wishlist.filter((item) => item !== text);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setIsFav(false);
      toast("Removed from wishlist", { icon: "💔" });
    } else {
      wishlist.push(text);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsFav(true);
      toast("Added to wishlist", { icon: "❤️" });
    }
  };
  return (
     <button
          onClick={toggleFav}
          className=" size-9 bg-slate-400 rounded-full flex items-center justify-center shadow hover:scale-110 transition "
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
  );
};

export default LoveButton;
