import React from "react";
import { Hero } from "../Hero/Hero";
import { OfferSection } from "../OfferSection/OfferSection";
import { MainProductsSlider } from "../ProductSlider/MainProductsSlider";
import { ProductsCarousel } from "../ProductSlider/ProductsCarousel";
import Marquee from "react-fast-marquee";
import { MarqueesOffers } from "../Marquees/MarqueesOffers";
import { useSelector } from "react-redux";
export default function Home  ()  {
  const promos = [
    { icon: "🔥", text: "50% OFF Summer Sale", highlight: true },
    { icon: "🚚", text: "Free Shipping", highlight: false },
    { icon: "⭐", text: "4.9/5 Reviews", highlight: false },
    { icon: "💳", text: "Easy Payment Options", highlight: false },
    { icon: "🎁", text: "Gift Wrapping Available", highlight: false },
  ];

const relatedCategories = useSelector((state) => state.related.relatedCategories) || "smartphones";

  return (
    <div className=" px-8 py-3 m-auto flex flex-wrap">
      <Hero />
      <div className="container mx-auto   mt-15">
        <MarqueesOffers />

        <MainProductsSlider
          autoPlay
          interval={3500}
          bgColor={"bg-orange-500"}
          textColor={"text-white"}
          title={"✨ Add to cart worthy picks ✨"}
          des={"Pst..Get Free Delivery On First Order"}
        >
          <ProductsCarousel url="https://dummyjson.com/products" />
        </MainProductsSlider>

        <OfferSection start={0} end={4} />

        <MainProductsSlider
          autoPlay
          interval={3500}
          isLoading={false}
          title={"Electronics accessories"}
        >
          <ProductsCarousel
            url="https://dummyjson.com/products/category/mobile-accessories"
            content={false}
          />
        </MainProductsSlider>

        <Marquee
          pauseOnHover
          speed={160}
          gradient={false}
          className="bg-linear-to-r from-pink-300 via-yellow-200 to-green-300 py-3 text-black"
        >
          {promos.map((promo, index) => (
            <span
              key={index}
              className={`mx-6 flex items-center gap-2 text-lg font-medium ${
                promo.highlight ? "text-red-600" : ""
              } animate-bounce`}
            >
              {promo.icon}{" "}
              {promo.highlight ? <strong>{promo.text}</strong> : promo.text}
            </span>
          ))}
        </Marquee>

       {relatedCategories.map((cat, idx) => (
  <MainProductsSlider
    key={idx}
    title={`Products related to ${cat} (Your browse)`}
    autoPlay
    interval={3500}
  >
    <ProductsCarousel
      url={`https://dummyjson.com/products/category/${cat}`}
      content={false}
    />
  </MainProductsSlider>
))}


        <OfferSection start={4} end={8} />
        <MainProductsSlider
          autoPlay
          interval={3500}
          isLoading={false}
          bgColor={"bg-green-700"}
          textColor={"text-white"}
          title={"✨ sports-accessories✨"}
        >
          <ProductsCarousel
            url="https://dummyjson.com/products/category/sports-accessories"
            content={false}
          />
        </MainProductsSlider>
      </div>
    </div>
  );
};
