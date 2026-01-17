import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProductDetailsContent } from "./ProductDetailsContent";
import { useDispatch } from "react-redux";
import { setCategory } from "@/Redux/filterSlice";
import { addRelatedCategory } from "@/Redux/relatedSlice";

export default function ProductDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // استدعاء المنتج من الكاش لو موجود
  const cachedProduct = queryClient
    .getQueryData(["products", "https://dummyjson.com/products?limit=1000"])
    ?.data.find((p) => p.id === Number(id));

  // Fetch من API لو مش موجود في الكاش
  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  };

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
    initialData: cachedProduct,
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

   useEffect(() => {
    if (product?.category) {
      dispatch(addRelatedCategory(product.category));
    }
  }, [product]);

  if (isLoading) return <div>Loading...</div>;

  const handleCategoryClickd = (cat) => {
    dispatch(setCategory(cat));
    navigate("/products");
  };
// useEffect
 

  return (
    <div className="container md:mx-auto p-5">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/">Home</Link> /{" "}
        <Link to="#" onClick={() => handleCategoryClickd(product.category)}>
          {product.category}
        </Link>{" "}
        / <span className="text-black dark:text-white">{product.title}</span>
      </nav>

      <ProductDetailsContent product={product} />
    </div>
  );
};
