import React, { useId } from 'react'

export const HeroShaoe = ({ image, children }) => {
    const clipId = useId();
  return (
   <svg  viewBox="0 0 150 100" width="full" height="full">
      <defs>
        <clipPath id={clipId}>
<path d="M10,0H140A10,10 0,0,1 150,10V50A10,10 0,0,1 140,60H140A10,10 0,0,0 130,70V90A10,10 0,0,1 120,100H110A10,10 0,0,1 100,90V85A10,10 0,0,0 90,75H10A10,10 0,0,1 0,65V10A10,10 0,0,1 10,0Z"/>   
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
  )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="200" height="150"><path d="M10,0H190A10,10 0,0,1 200,10V80A10,10 0,0,1 190,90H190A10,10 0,0,0 180,100V140A10,10 0,0,1 170,150H150A10,10 0,0,1 140,140V120A10,10 0,0,0 130,110H10A10,10 0,0,1 0,100V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150" height="100"><path d="M10,0H140A10,10 0,0,1 150,10V50A10,10 0,0,1 140,60H140A10,10 0,0,0 130,70V90A10,10 0,0,1 120,100H110A10,10 0,0,1 100,90V85A10,10 0,0,0 90,75H10A10,10 0,0,1 0,65V10A10,10 0,0,1 10,0Z" fill="#513D34" /></svg> */}