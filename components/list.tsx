// import photoGallery from "@/data/photos";
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
// import { PhotoItem } from "@/data/photos";
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

      <ul className="md:columns-2 lg:columns-3 lg:gap-6 mt-6">
        {initialList.map((item) => (
          <li
            className={`relative mb-6 group lg:hover:brightness-100 lg:mb-0`}
            key={item.id}
          >


            <div className="lg:absolute left-4  z-50 bottom-10 lg:hover:underline lg:hover:cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity">
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

            <div className="relative bg-red-400">
              <Image
                src={item.url}
                alt={item.title}
                width={800}
                height={800}
                priority={true}
                className="mt-4 lg:mb-4"
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

// Define the type for each photo object in the array, now including an id
export type PhotoItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
  className: string;
};

// Create an array of objects adhering to the PhotoItem type, now including className
export const photoGallery: PhotoItem[] = [
  {
    id: 1,
    title: "Algarve Beach",
    description: "A beautiful beach in Algarve.",
    category: "travel",
    url: "https://images.unsplash.com/photo-1654797554078-83d21229b006?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:row-end-2", // Custom class for styling
  },
  {
    id: 2,
    title: "Dean Village",
    description: "Historic area in Edinburgh.",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1610991135724-89a7b9fba1fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlaXRofGVufDB8fDB8fHww",
    className: "", // Custom class for styling
  },
  {
    id: 3,
    title: "Minimal",
    description: "Simple and modern interior.",
    category: "interior",
    url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1pbmltYWx8ZW58MHx8MHx8fDI%3D",
    className: "", // Custom class for styling
  },
  {
    id: 4,
    title: "Forest Path",
    description: "Path through a forest.",
    category: "nature",
    url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D",
    className: "", // Custom class for styling
  },
  {
    id: 5,
    title: "House",
    description: "Snow-covered mountain house.",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8Mg%3D%3D",
    className: "", // Custom class for styling
  },
  {
    id: 6,
    title: "Lemons",
    description: "Fresh lemons on a table.",
    category: "food",
    url: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDI%3D",
    className: "", // Custom class for styling
  },
  {
    id: 7,
    title: "Ocean",
    description: "Calm ocean waves.",
    category: "nature",
    url: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlYXxlbnwwfHwwfHx8Mg%3D%3D",
    className: "", // Custom class for styling
  },
  {
    id: 8,
    title: "City Tram",
    description: "Tram in an urban area.",
    category: "urban",
    url: "https://images.unsplash.com/photo-1516900557549-41557d405adf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHx8Mg%3D%3D",
    className: "", // Custom class for styling
  },
  {
    id: 9,
    title: "Forest",
    description: "Starry sky over a forest.",
    category: "nature",
    url: "https://images.unsplash.com/photo-1721786642795-6041d379208f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    className: "", // Custom class for styling
  },
  {
    id: 10,
    title: "Road",
    description: "Mountain road scenery.",
    category: "travel",
    url: "https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    className: "", // Custom class for styling
  },
];
