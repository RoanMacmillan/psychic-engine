import photoGallery from "@/data/photos";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BlurFade from "@/lib/functions";
import { Button } from "./ui/button";
import {
  HeartFilledIcon,
  HeartIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { PhotoItem } from "@/data/photos";


import { toast, Toaster } from "sonner";
import Hero from "./hero";
import Card from "./ui/card";

const List = () => {
  const [input, setInput] = useState<string>("");

  const [favourite, setFavourite] = useState<PhotoItem[]>([]);
  const [initialList, setInitialList] = useState<PhotoItem[]>(photoGallery);

  useEffect(() => {
    console.log(favourite);
  }, [favourite]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(event.currentTarget.value);

    if (event.target.value === "") {
      setInitialList(photoGallery);
    } else {
      const filteredList = photoGallery.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );

      setInitialList(filteredList);
    }
  };

  const toggleFavourite = (photo: PhotoItem) => {
    setFavourite((prevFavourites) => {
      const isFavourite = prevFavourites.some((fav) => fav.id === photo.id);

      if (isFavourite) {
        toast.success(`${photo.title} removed from favourites!`, {
          icon: <HeartIcon />,
          duration: 3000,
        });

        return prevFavourites.filter((fav) => fav.id !== photo.id);
      } else {
        toast.success(`${photo.title} added to favourites!`, {
          icon: <HeartFilledIcon className="text-red-400" />,
          duration: 3000,
        });

        return [...prevFavourites, photo];
      }
    });
  };

  const isFavourite = (photo: PhotoItem) => {
    return favourite.some((fav) => fav.id === photo.id);
  };

  

  return (
    <>

<h1 className="text-3xl mt-10 font-bold lg:hidden">Photop</h1>


    <div className="lg:flex flex-row-reverse gap-6 mt-3 lg:mt-10 justify-between">



    <Hero />

    <div className="hidden lg:flex">
    <Card></Card>
    </div>


      <div className="relative flex flex-row items-end w-full mt-3 lg:mt-0">


      <div className="w-full">
        <div className="mb-4 hidden lg:block">
      <h1 className="text-5xl font-bold">Photop</h1>
      <div className="flex justify-between">
        <div>
      <p className="mt-2">The source for visuals.</p>
        <p>Powered by creators everywhere.</p>
        </div>

        <div className="text-sm mt-auto text-slate-500">Supported by LOREM</div>

        </div>
      </div>


        <Input
          placeholder="Search Images"
          value={input}
          onChange={handleChange}
          className="pl-8 lg:w-full"
          
        ></Input>

        <button
          // onClick={handleSearch}
          className="absolute top-[.6875rem] left-[.5625rem] lg:bottom-[15px] lg:top-auto"
        >
          <MagnifyingGlassIcon></MagnifyingGlassIcon>
        </button>
        </div>
      </div>

      </div>

      <ul className="md:columns-2 lg:columns-3 lg:gap-6 mt-6">
        {initialList.map((item) => (
          <li
            className={`relative mb-6 group lg:hover:brightness-100 lg:mb-0`}
            key={item.id}

          >

            


            <div className="lg:absolute left-4  z-50 bottom-6 lg:hover:cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity">
              <h1 className="font-semibold mt-0 lg:text-white">{item.title}</h1>
              <p className="text-xs text-gray-500 lg:text-gray-200">
                {item.description}
              </p>
            </div>


            <BlurFade
              className="rounded-sm overflow-hidden md:mt-0"
              delay={0.1}
              inView
              
            >
              {/* <div className="absolute bg-black opacity-20 top-0 left-0 w-full h-full">
            
            </div>

            <div className="absolute bottom-0 text-white left-2">

            <h1 className="">{item.title}</h1>
            <p>{item.description}</p>

            </div> */}


            <div className="relative">
              <Image
                src={item.url}
                alt={item.title}
                width={800}
                height={800}
                priority={true}
                className="mt-4 lg:mb-0"
              ></Image>
          <div className="absolute hidden hover:cursor-zoom-in opacity-0 lg:block bg-black lg:group-hover:opacity-30 top-0 left-0 w-full h-full"></div>

              </div>


            </BlurFade>



              



            <div className="flex justify-between mt-2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity  lg:absolute top-4 right-4">
              <div className="flex gap-2">
                {/* add to favourites */}
                <Button
                  onClick={() => toggleFavourite(item)}
                  // className={`${isFavourite(item) ? 'bg-red-400' : ''} shadow-sm`}
                  variant="outline"
                  className=""
                >
                  {/* {isFavourite(item) ? (
                    <HeartFilledIcon className=""></HeartFilledIcon>
                  ) : (
                    <HeartIcon></HeartIcon>
                  )} */}

                  <HeartFilledIcon
                    className={`${isFavourite(item) ? "text-red-400" : ""}`}
                  ></HeartFilledIcon>
                </Button>

                {/* <Button className="shadow-sm" variant="outline">
                  <PlusIcon></PlusIcon>
                </Button> */}
              </div>

              {/* <Button className="shadow-sm" variant="outline">
                Download
              </Button> */}
            </div>


            

          </li>
        ))}





      </ul>

      {/* <Toaster className="shadow-none"/> */}




     
    </>
  );
};

export default List;


