import React, { useId } from "react";

export const ShapeWrapper = ({ image, children }) => {
    const clipId = useId();
  return (
    <svg  viewBox="0 0 150 100" width="full" height="full">
      <defs>
        <clipPath id={clipId}>
          <path d="M10,0H140A10,10 0,0,1 150,10V65A10,10 0,0,1 140,75H80A10,10 0,0,0 70,85V90A10,10 0,0,1 60,100H10A10,10 0,0,1 0,90V10A10,10 0,0,1 10,0Z" />
        </clipPath>
      </defs>

      {/* الصورة */}
      <image
      className="transition-opacity duration-500"
        href={image}
        width="100%"
        height="100%"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      />

      {/* محتوى */}
      <foreignObject
        clipPath="url(#shape)"
        width="100%"
        height="100%"
      >
        <div className="h-full flex flex-nowrap items-end p-3">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
    <path d="M10,0H190A10,10 0,0,1 200,10V60A10,10 0,0,1 190,70H90A10,10 0,0,0 80,80V90A10,10 0,0,1 70,100H10A10,10 0,0,1 0,90V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg> */}

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><path d="M10,0H90A10,10 0,0,1 100,10V60A10,10 0,0,1 90,70H50A10,10 0,0,0 40,80V90A10,10 0,0,1 30,100H10A10,10 0,0,1 0,90V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg>

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><path d="M10,0H90A10,10 0,0,1 100,10V70A10,10 0,0,1 90,80H50A10,10 0,0,0 40,90V90A10,10 0,0,1 30,100H10A10,10 0,0,1 0,90V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg>
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150" height="100"><path d="M10,0H140A10,10 0,0,1 150,10V65A10,10 0,0,1 140,75H80A10,10 0,0,0 70,85V90A10,10 0,0,1 60,100H10A10,10 0,0,1 0,90V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg>