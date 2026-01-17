import React, { useMemo } from "react";
import { ShoppingBag } from "lucide-react";
import { HeroCarousel } from "../../Utilities/HeroCarousel";
import { useProducts } from "../../Hooks/useProducts";
import imageSale from "../../assets/e13208e3014d00b5a40eb3e93c677613.jpg";
import ModernSlider from "../../Utilities/ModernSlider";

/* ---------------- Skeleton ---------------- */
const HeroSkeleton = () => (
  <div className="w-full h-full animate-pulse bg-red-200 rounded-3xl" />
);

/* ---------------- Component ---------------- */
export const Hero = () => {
  /* 🔹 Fetch products (cached) */
  const { data, isLoading } = useProducts({
    url: "https://fakestoreapiserver.reactbd.org/api/walmartproducts",
    staleTime: 1000 * 60 * 10,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = data?.data || [];

  /* 🔹 Extract images (memoized) */
  const images = useMemo(
    () => products.map((p) => p.image).filter(Boolean),
    [products]
  );

  /* 🔹 Random image hover (يتغير كل 4 ثواني) */
  // const img1 = useRandomProduct(images, 4000);

  /* 🔹 random product مرتبط بالصورة الحالية */
  // const currentProduct = useMemo(() => {
  //   if (!products.length || !img1.src) return null;
  //   return products.find((p) => p.image === img1.src) || null;
  // }, [products, img1.src]);

  /* 🔹 Ads */
  const ads = [
    "https://i.pinimg.com/1200x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg",
    "https://i.pinimg.com/1200x/7b/cc/c3/7bccc3b409a30ce9567191326f52c2b4.jpg",
    "https://i.pinimg.com/736x/5b/57/fd/5b57fdbb9f9c11bb22db41a3213d264e.jpg",
  ];

  return (
    <section className="h-[80vh] w-full">
      {/* ================= Desktop ================= */}
      <div className="hidden md:grid h-full grid-cols-4 grid-rows-3 gap-6">
        {/* 🔥 Main random image */}
        <div
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/0e/f6/a3/0ef6a3777bdbe471e1c87d4ca7780c3d.jpg)`,
          }}
          className=" col-span-4 col-start-1 sm:col-span-2 xl:col-span-1 row-span-3 relative rounded-3xl overflow-hidden group bg-cover bg-center px-10 py-25 "
        >
          <div className="absolute inset-0 bg-black/20" />
          <div
            className=" relative inset-0 w-full h-full text-white transition-all duration-500 p-8 rounded-2xl "
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/0e/f6/a3/0ef6a3777bdbe471e1c87d4ca7780c3d.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-full p-8 text-white">
              {/* {currentProduct && (
                <p className="absolute top-6 right-6 bg-yellow-500 px-4 py-2 rounded-full font-bold">
                  Exclusive
                </p>
              )} */}

              {/* <div className="absolute bottom-8 right-8 flex gap-4">
                <LoveButton />
                <button className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center hover:bg-slate-500 transition">
                  <ShoppingBag />
                </button>
              </div> */}
            </div>
          </div>
        </div>
        {/* 🔹 Ads Carousel */}
        <div className="col-start-3 xl:col-start-2 col-span-2 row-start-1 rounded-3xl overflow-hidden">
          {isLoading ? <HeroSkeleton /> : <HeroCarousel images={ads} />}
        </div>
        {/* 🔹 Products Carousel */}
        <div className="hidden sm:block col-start-3 xl:col-start-2 col-span-2 row-start-2 row-span-2 rounded-3xl overflow-hidden">
          {/* {isLoading ? <HeroSkeleton /> : <HeroCarousel images={images} />} */}
          {isLoading ? <HeroSkeleton /> : <ModernSlider images={images} />}
        </div>
        {/* 4️⃣ Static images */}{" "}
        <div className="hidden group overflow-hidden relative xl:block col-start-4 row-start-1 rounded-3xl bg-white/10 backdrop-blur-xl text-white">
          {" "}
          <img
            src="https://i.pinimg.com/736x/86/02/51/860251ee6bb06662c9345a5deac8976f.jpg"
            className="w-full h-full object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            alt=""
          />{" "}
        </div>{" "}
        <div className="hidden group overflow-hidden relative xl:block col-start-4 row-start-2 rounded-3xl bg-white/10 backdrop-blur-xl text-white">
          {" "}
          <img
            src={imageSale}
            alt=""
            className="w-full h-full object-center"
          />{" "}
        </div>{" "}
        {/* 6️⃣ Top places */}{" "}
        <div className="hidden xl:block col-start-4 row-start-3 relative rounded-3xl overflow-hidden dark:bg-white/30 bg-slate-400 text-white p-5">
          {" "}
          <div className="relative z-20">
            {" "}
            <h3 className="text-lg font-semibold">Top Places</h3>{" "}
            <p className="text-sm opacity-80">Discover amazing spots</p>{" "}
          </div>{" "}
          <div className="absolute bottom-0 right-0 w-72 h-56 pointer-events-none">
            {" "}
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              className="absolute bottom-12 -right-15 w-60 h-32 object-cover rounded-2xl rotate-80 opacity-70 z-10 shadow-md"
              alt=""
            />{" "}
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              className="absolute bottom-6 -right-6 w-64 h-36 object-cover rounded-2xl rotate-60 z-20 shadow-lg"
              alt=""
            />{" "}
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              className="absolute bottom-2 right-2 w-68 h-40 object-cover rounded-2xl rotate-40 z-30 shadow-xl"
              alt=""
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Mobile */}{" "}
      <div className="md:hidden h-full">
        {" "}
        {isLoading ? <HeroSkeleton /> : <HeroCarousel images={images} />}{" "}
      </div>{" "}
    </section>
  );
};
