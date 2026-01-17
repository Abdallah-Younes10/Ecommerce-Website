import React from "react";
import { OfferCard } from "../../Utilities/OfferCard";
import { useDispatch } from "react-redux";
import { setCategory } from "@/Redux/filterSlice";

export const OfferSection = ({ start, end }) => {
  const categories = [
    {
      title: "Smartphones",
      category: "smartphones",
      to: "/products",
      linkTitle: "See all deals",
    },
    {
      title: "Laptops",
      category: "laptops",
      to: "/products",
      linkTitle: "See all deals",
    },
    {
      title: "Mens Shirts",
      category: "mens-shirts",
      to: "/products",
      linkTitle: "See all deals",
    },
    {
      title: "Home Decoration",
      category: "home-decoration",
      to: "/products",
      linkTitle: "See all deals",
    },

    // 🆕 new categories
    {
      title: "Fragrances",
      category: "fragrances",
      to: "/products",
      linkTitle: "See all deals",
    },
    {
      title: "Groceries",
      category: "groceries",
      to: "/products/",
      linkTitle: "See all deals",
    },
    {
      title: "Womens Dresses",
      category: "womens-dresses",
      to: "/products/",
      linkTitle: "See all deals",
    },
    {
      title: "Mens Shoes",
      category: "mens-shoes",
      to: "/products/",
      linkTitle: "See all deals",
    },
  ];
const dispatch =useDispatch()
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-full">
      {categories.slice(start, end).map((cat) => (
        <OfferCard
          key={cat.category}
          title={cat.title}
          category={cat.category}
          to={cat.to}
          linkTitle={cat.linkTitle}
          onClick={() => dispatch(setCategory(cat.category))}
        />
      ))}
    </section>
  );
};
