import React, { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import img2 from "../../assets/EG_Flash_Deals_DC.jpg";
import { ProfileDropdown } from "./ProfileDropdown";
import Switch from "../../Utilities/Switch";
import { CategoryNav } from "./CategoryNav";
import CartDrawer from "@/Utilities/CartDrawer";
import WishlistDrawer from "@/Utilities/WishlistDrawer";
import { useProducts } from "@/Hooks/useProducts";
import { useDispatch } from "react-redux";
import { setSearch } from "@/Redux/filterSlice";
import { useDebounce } from "@/Hooks/useDebounce";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const searchFromRedux = useSelector((state) => state.filter.search);

  // URL params
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get("search") || "";

  // Debounce
  const debouncedSearch = useDebounce(searchFromUrl, 400);

  // Sync URL → Redux
  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  // Redirect to /products if not already there
  useEffect(() => {
    if (debouncedSearch && window.location.pathname !== "/products") {
      navigate(`/products?search=${encodeURIComponent(debouncedSearch)}`, {
        replace: true,
      });
    }
  }, [debouncedSearch, navigate]);

  // Products for drawers only
  const { data, isLoading } = useProducts({
    url: "https://dummyjson.com/products?limit=200",
  });
  const products = data?.data ?? [];

  const user = {
    name: "Joseph McFall",
    email: "name@flowbite.com",
    img2,
  };

  const profileLinks = [
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" },
  ];

  return (
    <header className="w-full flex flex-col">
      {/* Main Navbar */}
      <nav className=" p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={img} className=" w-30" alt="Logo" /> */}
          <span className="text-3xl font-semibold text-heading Pacifico-semibold-italic drop-shadow-md">
            My<span className="text-red-500">Shop</span>
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 mx-4 hidden md:flex dark:bg-slate-800 bg-gray-400 rounded-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchFromUrl}
              onChange={(e) => {
                const value = e.target.value;
                setSearchParams(value ? { search: value } : {});
              }}
              className="w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium rounded-3xl text-heading text-sm placeholder:text-white"
            />

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 10a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <Switch />

          <WishlistDrawer products={products} isLoading={isLoading} />
          <CartDrawer products={products} isLoading={isLoading} />
          <ProfileDropdown user={user} navigation={profileLinks} />
        </div>
      </nav>

      {/* Categories */}
      <CategoryNav />
    </header>
  );
}
