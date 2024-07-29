import photoGallery from "@/data.tsx/photos";
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
import { PhotoItem } from "@/data.tsx/photos";
import Card from "@/components/ui/card";
import Collections from "@/components/Collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { toast, Toaster } from "sonner";

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
        })

        return prevFavourites.filter((fav) => fav.id !== photo.id);
      } else {
        toast.success(`${photo.title} added to favourites!`, {

          icon: <HeartFilledIcon className="text-red-400" />,
          duration: 3000,
        })
        

        return [...prevFavourites, photo];
      }
    });
  };
  

  const isFavourite = (photo: PhotoItem) => {
    return favourite.some((fav) => fav.id === photo.id);
  };

  return (
    <>
      <Carousel className="mt-3 lg:hidden">
        <CarouselContent className="">
          <CarouselItem className="basis-3/4 sm:basis-1/2">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-3/4 sm:basis-1/2">
            <Collections />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative mt-3">
        <Input
          placeholder="Search Images"
          value={input}
          onChange={handleChange}
          className="pl-8"
        ></Input>

        <button
          // onClick={handleSearch}
          className="absolute top-[.6875rem] left-[.5625rem]"
        >
          <MagnifyingGlassIcon></MagnifyingGlassIcon>
        </button>
      </div>

      <ul className="grid-cols-1 grid gap-2 gridtest lg:grid-cols-3 md:gap-4 mt-0 md:grid-cols-2">
        
        {initialList.map((item) => (
          <li className="relative mt-6" key={item.id}>
            <div className="">
            <h1 className="font-semibold mt-4">{item.title}</h1>
            <p className="text-xs text-gray-500">{item.description}</p>
            </div>

            <BlurFade
              className="rounded-sm overflow-hidden mt-4"
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
                priority={true}
                className=""
              ></Image>
            </BlurFade>

            <div className="flex justify-between mt-2">
              <div className="flex gap-2">
                {/* add to favourites */}
                <Button
                  onClick={() => toggleFavourite(item)}
                  // className={`${isFavourite(item) ? 'bg-red-400' : ''} shadow-sm`}
                  variant="outline"
                  
                >
                  {/* {isFavourite(item) ? (
                    <HeartFilledIcon className=""></HeartFilledIcon>
                  ) : (
                    <HeartIcon></HeartIcon>
                  )} */}

                    <HeartFilledIcon 
                    
                  className={`${isFavourite(item) ? 'text-red-400' : ''}`}

                    
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
