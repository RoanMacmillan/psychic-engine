import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"; 
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Layout from "@/components/layout";
import List from "@/components/list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {



 



  return (
   

      <Layout title='Home' >

        <h1 className="text-3xl font-bold">Photop</h1>
        <p className="mt-1">The world's source for visuals.</p>
        <p>Powered by creators everywhere.</p>

        <List />


      </Layout>

      

  );
}



