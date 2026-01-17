import { useDispatch, useSelector } from "react-redux";
import { ProductGallery } from "./ProductGallery";
import { ProductRatingSummary } from "./ProductRatingSummary";
import { ProductReviews } from "./ProductReviews";
import { addToCart } from "@/Redux/cartSlice";
import toast from "react-hot-toast";
import { useMemo } from "react";
import { StarRating } from "@/Utilities/StarRating";
import { toggleWishlist } from "@/Redux/wishlistSlice";
import { MainProductsSlider } from "../ProductSlider/MainProductsSlider";
import { ProductsCarousel } from "../ProductSlider/ProductsCarousel";

export const ProductDetailsContent = ({ product }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    description,
    price,
    rating,
    images = [],
    brand,
    category,
    availabilityStatus,
    stock,
    discountPercentage,
    dimensions,
    reviews = [],
  } = product;

  const wishlistIds = useSelector((s) => s.wishlist.ids);

  if (!product) return null;

  const isFav = wishlistIds.includes(product.id);

  const img = images[0];
  const finalPrice = useMemo(() => {
    if (!discountPercentage) return price;
    return (price - price * (discountPercentage / 100)).toFixed(2);
  }, [price, discountPercentage]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ id, title, price: finalPrice, image: images[0] }));
    toast.success("Added to cart 🛒");
    console.log(img);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(id));
    toast.success(isFav ? "Removed from wishlist 💔" : "Added to wishlist ❤️");
  };
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Gallery */}
      <ProductGallery images={images} title={title} />

      {/* Info */}
      <div className="flex flex-col relative ">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">{title}</h1>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500 mb-3">
          {brand} · {category}
        </p>

        {/* Description */}
        <p className="mb-4 text-gray-700 dark:text-gray-500">{description}</p>

        {/* Price + Rating */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-semibold">
            ${finalPrice}
            <span className="text-sm text-red-500 ml-2">
              ({discountPercentage}% OFF)
            </span>
          </span>
          <StarRating rating={rating} />
        </div>

        {/* Dimensions */}
        {dimensions && (
          <p className="text-sm mb-4">
            Dimensions:
            <strong className="ml-1">
              W {dimensions.width} × H {dimensions.height} × D{" "}
              {dimensions.depth}
            </strong>
          </p>
        )}

        {/* Availability */}
        <p className="text-sm mb-2">
          Status: <strong>{availabilityStatus}</strong>
        </p>

        <p className="text-sm mb-6">
          Stock: <strong>{stock}</strong>
        </p>

        {/* CTA */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-black text-white py-2 rounded hover:bg-black/90 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={handleWishlist}
            className={`px-4 py-2 rounded border  transition ${
              isFav ? "border-red-500 text-red-500" : "border-gray-800"
            }`}
          >
            ♥
          </button>
        </div>
        <ProductRatingSummary reviews={reviews} rating={rating} />
      </div>

      {/* Reviews */}
      <div className="md:col-span-2">
        <MainProductsSlider
          autoPlay
          interval={3500}
          isLoading={false}
          title={"Related Products"}
        >
          <ProductsCarousel
            url={`https://dummyjson.com/products/category/${category}`}
            content={true}
          />
        </MainProductsSlider>
        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
};
