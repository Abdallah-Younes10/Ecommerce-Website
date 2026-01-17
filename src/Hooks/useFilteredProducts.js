import { useMemo } from "react";

export const useFilteredProducts = ({
  products,
  category,
  brand,
  search,
  rating,
  sortBy,
  order,
  price
}) => {
  return useMemo(() => {
    let list = [...products];

    if (search) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category?.length) {
      list = list.filter((p) => category.includes(p.category));
    }

    if (brand?.length) {
      list = list.filter((p) => brand.includes(p.brand));
    }

    if (price?.length) {
  list = list.filter((p) =>
    price.some(
      (r) => p.price >= r.min && p.price <= r.max
    )
  );
}



   if (rating?.length) {
  list = list.filter(p =>
    rating.some(r => p.rating >= r && p.rating < r+1)
  );
}


    list.sort((a, b) => {
      if (sortBy === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });

    return list;
  }, [products, category, brand, search, rating, sortBy, order, price]);
};
