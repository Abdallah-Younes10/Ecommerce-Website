import { useState } from "react";

export const ProductGallery = ({ images = [], title }) => {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="w-full">
      <img
        src={active}
        alt={title}
        className=" w-full rounded-xl mb-4"
      />

      <div className="flex gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title}-${i}`}
            onClick={() => setActive(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border
              ${active === img ? "border-black" : "border-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
};
