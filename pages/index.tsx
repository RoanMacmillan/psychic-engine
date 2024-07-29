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

import { Input } from "@/components/ui/input";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {



 



  return (
   

      <Layout title='Home' >

        <h1 className="text-3xl mt-10 font-bold">Photop</h1>
        {/* <p className="mt-1">The world's source for visuals.</p> */}
        {/* <p>Powered by creators everywhere.</p> */}

        {/* <Input ></Input> */}

        {/* <Carousel className="mt-3">
  <CarouselContent className="">
    <CarouselItem className="basis-3/4 sm:basis-1/2"><Card /></CarouselItem>
    <CarouselItem className="basis-3/4 sm:basis-1/2"><Collections/></CarouselItem>
  </CarouselContent>
</Carousel> */}




        <List />

        <Toaster />


      </Layout>

      

  );
}



