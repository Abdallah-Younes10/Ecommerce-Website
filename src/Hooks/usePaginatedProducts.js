import { useMemo } from "react";

export const usePaginatedProducts = (items, page, limit) => {
  return useMemo(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      items: items.slice(startIndex, endIndex),
      total: items.length,
      start: items.length ? startIndex + 1 : 0,
      end: Math.min(endIndex, items.length),
    };
  }, [items, page, limit]);
};
