import { useEffect, useRef, useState } from "react";

export function useRandomProduct(products = [], delay = 4000) {
  const [src, setSrc] = useState(null);
  const paused = useRef(false);

  useEffect(() => {
    if (!products.length) return;

    const pick = () => {
      const index = Math.floor(Math.random() * products.length);
      setSrc(products[index]);
    };

    pick(); // أول مرة

    const interval = setInterval(() => {
      if (!paused.current) pick();
    }, delay);

    return () => clearInterval(interval);
  }, [products, delay]);

  return {
    src,
    onMouseEnter: () => (paused.current = true),
    onMouseLeave: () => (paused.current = false),
  };
}
