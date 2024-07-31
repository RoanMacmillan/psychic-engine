import React from 'react';
import Card from "@/components/ui/card";
import Collections from "@/components/Collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
    return (
        <>
        <div className='lg:hidden'>
            <Carousel className="mt-3 ">
        <CarouselContent className="">
          <CarouselItem className="basis-3/4 lg:basis-3/3 sm:basis-1/2">
            <Card />
          </CarouselItem>
          <CarouselItem className="basis-3/4 lg:basis-3/3 sm:basis-1/2">
            <Collections />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      </div>
        </>
    );
};

export default Hero;
