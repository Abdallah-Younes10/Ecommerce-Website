import React from 'react'

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-neutral-primary-soft max-w-sm p-6 border border-default rounded-base shadow-xs animate-pulse">
      <div className="w-full h-48 bg-neutral-secondary-medium rounded-base" />

      <div className="mt-4 space-y-3">
        <div className="h-5 w-3/4 bg-neutral-secondary-medium rounded" />
        <div className="h-4 w-full bg-neutral-secondary-medium rounded" />
        <div className="h-4 w-5/6 bg-neutral-secondary-medium rounded" />
      </div>

      <div className="mt-6 flex justify-between">
        <div className="h-5 w-20 bg-neutral-secondary-medium rounded" />
        <div className="h-5 w-16 bg-neutral-secondary-medium rounded" />
      </div>
    </div>
  );
};

