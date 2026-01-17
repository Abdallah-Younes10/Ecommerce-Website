import React from "react";
import { ShapeWrapper } from "../Shape/ShapeWrapper";
import { AutoImageShape } from "../AutoImageShape/AutoImageShape";

export default function About ()  {
  const imgs = [
    "data:image/webp;base64,UklGRr4EAABXRUJQVlA4ILIEAACQIwCdASreAHcAPtU0tVqoIigoFrEAGolpCJAoUEl+eHkka6NJIoe5epRnLxm+pW0bUVn+73NFuAmb7aF/1mbOPtr++5YznbOJ5Sc4JvCM+R8kWBDD92cBq5RzfM/JlhvTIAU4pRMoWBieEhzAQmTpq6/8nxCxNLJbuYVMBKESHZSyQ2EF7miK7m70gyP2aZsWSpmqDcfYiy9zR8ztKyDiFs38O3+VWfg5G/9P91LUP/6X3aSh9KM6oC7/3/TVyX6qk3kc3gFax4B6m3itC1mm9/Thqp17k5vvV3U+1Gxih98xehik8FvsjU3ZtQ9GeAVNBq5YXtSjk08p2a9OfsbTYz/PS51PLKjGCZZqmRLy0oTTFGkf7Hm5vPV2Od6vUeho7Whe0AD+n++NR9sV/aQXHMXaKUrLXxW6Az860t1hxBs2JLMYxXMDdIuFM+M/OYCkzeHqa0o4PbWMhp4vsLhrhKj2DyNqdJjA3quzquaJVQSASY3EkHNOrc6nd6TKzoVOANnLP+874uh7qWLkajrl97SjztSIZO6Q+85CWEX5NaO2m+qUc+GI6raNW6qL5JClGosPOdBEOifu7pgjzJjQqGqjzuNeoAGExWt1tvFQNLYt033Ij9Rj9s7xNAKrF6TEGWLJIBeadOpqs6GJY06gq8HLgjzvBIOeNZPBTRq8aj1rBgL+fCbutVbUlouBdDWc+g1YPqm9SQDhrTlpRdjMq5pdQwscNk1rvj53FzuGSJQamvq/Tgz+THSenPzQQRPtFGm39Gv34hFpJ9og+3wysj3z5Hbu6iL/Fp7gecNj93M/MCHmlrqJ1ZsNMkZKe4mIvq5HOxOMLHATmdgCHZPKBEiQqQ8c3O5Ef9sZqVjTbuXXmAGO4oZqjuXxpxc4TLbgkmuOtV0ul1VD1P9fSwr/P99KNyLPzTroowpIFyqo3eDKlEN+p4SYII5iuAOM4cWKO1NJl0blvg2py+AXLZgx5hJMEUiVEOZBjPGg+7J7V236KXvaLF1FVlHCRkSR840eaqQV+4K7zix+eAtpVs+FYCVSQJ5yrXEGcxPrTLhfgczgl+yq001+SeMmdjHxVoXT56KaN5aQA++R4RtC6x0jJFHcIIgmJ+vgNEEFgYGLAfnSx99EZ7+qygRed5K2eR3OC3Ts94oPyIM9x8pzAGE2qc5PxZ4zKupOWlfmP3mm4PCm9RCyw7y+g+1CiN1OOsDOUe63iV+Rp1rOv7Qdi7VcMXoZoi4/XvOcBZfRqxjkFGwXuKgukm3OlDpg5fsudlRyg2BrhHi1i5tDx0F9Fax6+G+Azx4jxyX5XYXtf3xn/Q51KKelXItClxEwj1rLrtcUAqwLTGDgqg4Uq8s0FCbynjIXTBogme3mYNwv0KQqnXhd/lWWnD8o07CN7aoU1PHFPrPqguWz21vmcdTYHcQkeCwcr8LUVS1hLmswnui1ZNTlJg4STw+6BfEryxwZaEWbTAwWao1uOL6ipbyybaRK92TShK0Z9Kc/T7bZ8gLwUpWLoJ4zu+Eb5Skifu+PO+MrpFQ03fPmLPOcS/4cWuTobhEHmnR3xo8QS/7o0fhV4wlHAQGaryIDkJTj0hT9hhQAAA==",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  ];

  return (
    <>
      <div className="flex w-full justify-around gap-5 h-full ">
{
    [...Array(3)].map((card ,index)=>(
     <div className="w-1/3 relative h-full ">
          <h2 className=" absolute bottom-0 right-0 p-5 text-2xl ">hello world <span className="text-md">350$</span></h2>
          <AutoImageShape imgs={imgs} startIndex={index} >
            {/* <div className="  p-2 rounded-lg text-sm absolute bottom-0 right-0">
              Card Content
              <p>350$</p>
            </div> */}
          </AutoImageShape>
        </div>
))
}

      </div>
    </>
  );
};
