import photoGallery from "@/data.tsx/photos";
import Image from "next/image";
import React, { useState } from "react";
const List = () => {
  return (
    <>
      <ul className="grid-cols-1 grid gap-2 md:grid-cols-2">
        {photoGallery.map((item, index) => (
          <li className="relative rounded-sm shadow-sm overflow-hidden" key={index}>
            {/* <div className="absolute bg-black opacity-20 top-0 left-0 w-full h-full">
            
            </div>

            <div className="absolute bottom-0 text-white left-2">

            <h1 className="">{item.title}</h1>
            <p>{item.description}</p>

            </div> */}
            <Image
              src={item.url}
              alt={item.title}
              width={800}
              height={800}
            ></Image>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
