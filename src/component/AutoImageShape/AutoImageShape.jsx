import React, { useEffect, useState } from "react";
import { ShapeWrapper } from "../Shape/ShapeWrapper";

export const AutoImageShape = ({ imgs, startIndex, children }) => {
  const [index, setIndex] = useState(startIndex);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    if (paused || !imgs.length) return;

    const interval = setInterval(() => {
       setIndex((prev) => {
      if (imgs.length <= 1) return prev;

      let next;
      do {
        next = Math.floor(Math.random() * imgs.length);
      } while (next === prev);

      return next;
    });
    }, 2000 + startIndex * 800);

    return () => clearInterval(interval);
  }, [paused, imgs]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      
    >
      <ShapeWrapper image={imgs[index]}>{children}</ShapeWrapper>
    </div>
  );
};
