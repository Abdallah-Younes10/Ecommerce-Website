import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Skeleton = () => (
  <div className="h-full w-full bg-slate-300 animate-pulse rounded-3xl" />
);

const HeroCarouselComponent = ({ images, loading }) => {
  if (loading) {
    return <Skeleton />;
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className="h-full rounded-3xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            // loading="lazy"
            className="h-full w-full object-fill rounded-3xl"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const HeroCarousel = memo(HeroCarouselComponent);
