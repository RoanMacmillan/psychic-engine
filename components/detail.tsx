import React from "react";
import { PhotoItem } from "@/data/photos";
import Image from "next/image";
import { Button } from "./ui/button";

interface DetailProps {
  // title: string;
  // description: string;
  item: PhotoItem;
  close: () => void;
}

const Detail: React.FC<DetailProps> = ({ item, close }) => {

if (!item) return null;

  return (
    <div className="absolute bg-white w-full rounded-md border-2 left-0 p-2 z-50 top-10">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Image alt={item.title} src={item.url} width={400} height={400}></Image>
      <Button onClick={close}>Close</Button>
    </div>
  );
};

export default Detail;
