import React, { useState, useEffect } from "react";
import { useRandomImageFade } from "../../Hooks/useRandomImage";
// import { useRandomImagefade } from "../../Hooks/useRandomImage";
// import { useRandomImageFade } from "../AutoImageShape/AutoImageShape";
// import { useRandomImageFade } from "../../Hooks/useRandomImageFade";

export const RandomImageCard = ({ images, delay = 4000, className, children }) => {
  const { index, src, onMouseEnter, onMouseLeave } = useRandomImageFade(images, delay);
  const [prevSrc, setPrevSrc] = useState(src);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (src !== prevSrc) {
      setFade(false);
      const timeout = setTimeout(() => {
        setPrevSrc(src);
        setFade(true);
      }, 200); // مدة fade
      return () => clearTimeout(timeout);
    }
  }, [src, prevSrc]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      <img
        src={prevSrc}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        alt=""
      />
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
};
