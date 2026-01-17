import { Link } from "react-router-dom";
import { useProducts } from "../../Hooks/useProducts";
import { ProductCardCarousel } from "./ProductCardCarousel";
import { ProductSkeleton } from "./ProductSkeleton";

export const ProductsCarousel = ({ url, content = true }) => {
  const { data = [], isLoading } = useProducts({ url });

   if (isLoading) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </>
    );
  }

  return data.data.slice(0, 20).map((product) => (
   <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="h-full"
    >
      <ProductCardCarousel
      product={product}
      content={content}
    />
    </Link>
    
  ));
};
