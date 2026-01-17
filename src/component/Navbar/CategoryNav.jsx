import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "@/Redux/filterSlice"; // slice اللي عملناه قبل كده
import { useNavigate } from "react-router-dom";

export const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryClick = (cat) => {
    dispatch(setCategory(cat)); // حدث state في Redux
    navigate("/products"); // روح لصفحة المنتجات
  };
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="w-full top-0 start-0 border-default relative ">
      <div className="flex flex-wrap items-center justify-between px-5 py-2">
        {/* زر dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className="relative inline-flex items-center text-sm font-medium text-center focus:ring-4 focus:ring-slate-400 md:ms-4 dark:bg-white/30 bg-slate-400 text-white mx-2 hover:text-red-400 focus:outline-none rounded-full p-3"
        >
          Categories
        </button>

        {/* Dropdown menu */}
        <div
          ref={ref}
          className={`z-80 w-1/2 dark:bg-slate-800 bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden absolute top-full left-0 transition-all duration-300 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center items-center px-4 py-3 font-semibold text-body border-b border-gray-600">
            All Categories
          </div>

          <div className="max-h-60 overflow-y-auto divide-y divide-gray-600">
            {Array.isArray(categories) &&
              categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-600 transition-colors duration-200 text-left"
                >
                  <span className="ml-2 text-sm capitalize">
                    {cat.replace("-", " ")}
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* عرض أول 8 فئات مباشرة */}
        <div className="hidden md:flex gap-2 overflow-hidden">
          {categories.slice(0, 8).map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className="bg-gray-400 text-white dark:bg-white/30 px-3 py-1 rounded-full hover:bg-slate-600 m-auto"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
