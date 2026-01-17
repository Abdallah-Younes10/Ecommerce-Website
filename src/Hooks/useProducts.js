import { useQuery } from "@tanstack/react-query";

const normalizeProducts = (json) => {
  // DummyJSON
  if (Array.isArray(json.products)) {
    return {
      items: json.products,
      total: json.total ?? json.products.length,
    };
  }

  // Laravel pagination
  if (Array.isArray(json.data)) {
    return {
      items: json.data,
      total: json.total ?? json.data.length,
    };
  }

  // Array مباشر
  if (Array.isArray(json)) {
    return {
      items: json,
      total: json.length,
    };
  }

  return {
    items: [],
    total: 0,
  };
};


const mapProduct = (item) => ({
  id: item._id || item.id,

  title: item.title || item.name,
  description: item.description,

  // الصور
  image:
    item.thumbnail ||
    item.image ||
    item.images?.[0] ||
    "",
  images: item.images || [],

  // السعر والتقييم
  price: item.price ?? item.cost ?? 0,
  rating: item.rating ?? 0,
  discountPercentage: item.discountPercentage ?? 0,

  // التصنيف
  category: item.category,
  brand: item.brand,

  // المخزون
  stock: item.stock ?? 0,
  availabilityStatus:
    item.stock > 0 ? "In Stock" : "Out of Stock",

  // بيانات إضافية (لصفحة التفاصيل)
  sku: item.sku,
  weight: item.weight,
  dimensions: item.dimensions,
  warrantyInformation: item.warrantyInformation,
  shippingInformation: item.shippingInformation,
  returnPolicy: item.returnPolicy,
  reviews: item.reviews || [],
});

const fetchProducts = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  const json = await res.json();
  const { items, total } = normalizeProducts(json);
  return {
    data: items.map(mapProduct),
    total,
  };

};


export const useProducts = ({ url, staleTime = 1000 * 60 * 5 }) => {
  return useQuery({
    queryKey: ["products", url],
    queryFn: () => fetchProducts(url),
    staleTime,
    cacheTime: 1000 * 60 * 30 
  });
};

