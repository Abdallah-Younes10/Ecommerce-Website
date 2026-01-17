import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  clearFilters,
  setSearch,
  setRating,
  setBrand,
  setPriceRange,
} from "@/Redux/filterSlice";
import { useProducts } from "@/Hooks/useProducts";
import { useFilteredProducts } from "@/Hooks/useFilteredProducts";
import { usePaginatedProducts } from "@/Hooks/usePaginatedProducts";
import { ProductCard } from "@/component/Products/ProductCard";
import { ProductModal } from "@/component/Products/ProductModal";
import { ProductCardSkeleton } from "@/component/Products/ProductCardSkeleton";
import { Pagination } from "@/Utilities/Pagination";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/Hooks/useDebounce";
import { ProductsFiltertion } from "@/Utilities/ProductsFiltertion";
import { RatingFilter } from "@/Utilities/RatingFilter";
import { PriceFilter } from "@/Utilities/PriceFilter";
// import { P } from "framer-motion/dist/types.d-DagZKalS";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* ================= URL Params ================= */
  const [searchParams, setSearchParams] = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";
  const categoryFromUrl = searchParams.get("category");

  /* ================= Debounce ================= */
  const debouncedSearch = useDebounce(searchFromUrl, 400);

  /* ================= Sync URL → Redux ================= */
  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
    if (categoryFromUrl) {
      dispatch(setCategory(categoryFromUrl));
    }
  }, [debouncedSearch, categoryFromUrl, dispatch]);

  /* ================= React Query ================= */
  const { data, isLoading } = useProducts({
    url: "https://dummyjson.com/products?limit=1000",
  });

  const products = data?.data || [];

  /* ================= Filtering ================= */
  const filteredProducts = useFilteredProducts({
    products,
    ...filters,
    sortBy,
    order,
  });

  /* ================= Pagination ================= */
  const { items, total, start, end } = usePaginatedProducts(
    filteredProducts,
    page,
    limit
  );

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="w-full bg-neutral-primary-soft border-b px-8">
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2"
            >
              {sidebarOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>

            <span className="font-semibold">
              {start} – {end} of {total} results
            </span>
            <div className="flex flex-wrap gap-2 ">
              {filters.category.map((f, i) => (
                <div
                  key={i}
                  className="relative inline-flex items-center bg-gray-300 text-black rounded-full px-6 py-2"
                >
                  <span className="text-sm font-medium">{f}</span>
                  <button
                    onClick={() => dispatch(setCategory(f))}
                    className="absolute top-0 right-0 bg-white rounded-full p-0.5 hover:scale-110 transition"
                  >
                    <XMarkIcon className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <select
            value={`${sortBy}-${order}`}
            onChange={(e) => {
              const [s, o] = e.target.value.split("-");
              setSortBy(s);
              setOrder(o);
              setPage(1);
            }}
            className="hidden sm:block px-3 py-2 bg-gray-500 text-white rounded"
          >
            <option value="title-asc">A → Z</option>
            <option value="title-desc">Z → A</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating-desc">Top Rated</option>
          </select>
        </div>
      </nav>

      <div className="flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-50 md:top-65 lg:top-0 z-50 w-64 h-screen bg-white dark:bg-slate-800 border-e
  overflow-y-auto transition-transform ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  } xl:translate-x-0`}
        >
          <ProductsFiltertion
            filter="category"
            products={products}
            selected={filters.category}
            onChange={(value) => {
              dispatch(setCategory(value));
              setPage(1);
            }}
          />
          <PriceFilter
            selected={filters.price}
            onChange={(range) => {
              dispatch(setPriceRange(range));
              setPage(1);
            }}
          />

          <ProductsFiltertion
            filter="brand"
            products={products}
            selected={filters.brand}
            onChange={(value) => {
              dispatch(setBrand(value));
              setPage(1);
            }}
          />

          <RatingFilter
            selected={filters.rating}
            onChange={(rating) => {
              dispatch(setRating(rating));
              setPage(1);
            }}
          />

          {/* <ProductsFiltertion filter ={"rating"} products={products}/> */}

          {/* <div className="p-4">
            <button
              onClick={() => {
                dispatch(clearFilters());
                setSearchParams({});
                setPage(1);
              }}
              className="w-full mt-4 px-3 py-2 bg-red-600 text-white rounded"
            >
              Clear Filters
            </button>
          </div> */}
        </aside>

        {/* Main */}
        <main className="flex-col  p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {isLoading &&
              Array.from({ length: limit }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}

            {!isLoading &&
              items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                />
              ))}
          </div>

          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          <Pagination
            page={page}
            limit={limit}
            total={total}
            onPageChange={setPage}
            onLimitChange={setLimit}
          />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
