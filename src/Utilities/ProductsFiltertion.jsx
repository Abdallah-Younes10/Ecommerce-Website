import React, { useState } from "react";

export const ProductsFiltertion = ({
  filter,
  products,
  selected = [],
  onChange,
})=> {
  const [IsOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const filters = [...new Set((products ?? []).map(p => p[filter])
      .filter(Boolean))];
//   console.log(filters);
  return (
    <>
      <div className="rounded border border-default overflow-hidden shadow-xs p-5">
        
          <h2 className="mb-4 font-semibold">{filter}</h2>
         {filters.slice(0,4 ).map((item) => (
        <div key={item} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => onChange(item)}
            className="w-4 h-4"
          />
          <label className="ms-2">{item}</label>
        </div>
      ))}


          <button
            type="button"
            className="flex flex-col items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
            onClick={handleMenu}
          >
            <svg
              data-accordion-icon
              className={`w-5 h-5 transition-transform duration-300 ${
                IsOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
       

        <div
          className={`${
            IsOpen ? "block" : "hidden"
          } border border-s-0 border-e-0 border-t-0 border-b-default`}
        >
          <div  className="p-4 md:p-5">
            {filters.slice(4,15 ).map((item) => (
            <div key={item} className="flex items-center mb-4">
              <input
                id={`${filter}-${item}`} 
                  type="checkbox"
            checked={selected.includes(item)}
            onChange={() => onChange(item)}
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
              <label
               htmlFor={`${filter}-${item}`}
                className="select-none ms-2 text-sm font-medium text-heading"
              >
                {item}
              </label>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};
