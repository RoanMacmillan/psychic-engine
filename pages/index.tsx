import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"; 
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Layout from "@/components/layout";
import List from "@/components/list";
import Card from "@/components/ui/card";
import Collections from "@/components/Collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {



 



  return (
   

      <Layout title='Home' >

        <h1 className="text-3xl mt-5 font-bold">Photop</h1>
        {/* <p className="mt-1">The world's source for visuals.</p> */}
        {/* <p>Powered by creators everywhere.</p> */}

        <Carousel className="mt-3">
  <CarouselContent className="">
    <CarouselItem className="basis-3/4 sm:basis-1/2"><Card /></CarouselItem>
    <CarouselItem className="basis-3/4 sm:basis-1/2"><Collections/></CarouselItem>
    {/* <CarouselItem className="basis-3/4"><Card /></CarouselItem> */}
  </CarouselContent>
  {/* <CarouselPrevious /> */}
  {/* <CarouselNext /> */}
</Carousel>


        <List />


      </Layout>

      

  );
}



