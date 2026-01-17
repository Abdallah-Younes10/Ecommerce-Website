import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const MainProductsSlider = ({
  children,
  autoPlay = false,
  interval = 3000,
  isLoading = false,
  bgColor = "bg-white",
  textColor = "text-slate-800",
  title = "",
  des = "",
}) => {
  const sliderRef = useRef(null);

  const next = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const prev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!autoPlay || isLoading) return;

    const id = setInterval(() => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        next();
      }
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, isLoading]);

  return (
    <div
      className={`relative w-full ${bgColor} dark:bg-white/30 text-slate-800 my-8 rounded p-5`}
    >
      <h1 className={`font-bold text-xl ${textColor} dark:text-white`}>
        {title}
        <span className="text-sm mx-5 border-b-2 font-normal">
          <Link>Shop Now</Link>
        </span>
      </h1>

      <p className={`${textColor}`}> {des} </p>

      <div
        ref={sliderRef}
        className="
    flex gap-4
    overflow-x-auto
    scroll-smooth
    snap-x snap-mandatory
    touch-pan-x
    mt-4
    no-scrollbar 
  "
      >
        {children}
      </div>

      <button
        onClick={prev}
        className="
    absolute
    start-3
    top-1/2
    -translate-y-1/2
    size-12
    flex items-center justify-center
    text-2xl
    bg-white
    rounded-full
    shadow-md
    hover:bg-gray-100
    transition
  "
      >
        ‹
      </button>

      <button
        onClick={next}
        className="
    absolute
    end-3
    top-1/2
    -translate-y-1/2
    size-12
    flex items-center justify-center
    text-2xl
    bg-white
    rounded-full
    shadow-md
    hover:bg-gray-100
    transition
  "
      >
        ›
      </button>
    </div>
  );
};
