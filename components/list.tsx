import photoGallery from "@/data.tsx/photos";
import Image from "next/image";
import React, { useState } from "react";
import BlurFade from "@/lib/functions";
import { Button } from "./ui/button";
import { HeartFilledIcon, PlusIcon } from "@radix-ui/react-icons";



const List = () => {
  return (
    <>
      <ul className="grid-cols-1 grid gap-2 md:gap-4 mt-0 md:grid-cols-2">
        {photoGallery.map((item, index) => (
          <li className="relative mt-6 " key={index}>

            <h1 className="font-semibold mt-4">{item.title}</h1>
            <p className="text-xs text-gray-500">{item.description}</p>

<BlurFade
            className="rounded-sm shadow-sm overflow-hidden mt-4"
            
            delay={0.1}
            inView
          >
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

            </BlurFade>

            <div className="flex justify-between mt-2">

              <div className="flex gap-2">

            <Button className="shadow-sm" variant='outline'><HeartFilledIcon></HeartFilledIcon></Button>
            <Button className="shadow-sm" variant='outline'><PlusIcon></PlusIcon></Button>

            </div>
              

              <Button className="shadow-sm" variant='outline'>Download</Button>
              </div>

          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
