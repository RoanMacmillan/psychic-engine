import React from "react";
import { Button } from "./button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Card = () => {
  return (
    <>
      <div className="border  rounded-sm h-[]">
        <div className="flex gap-2 p-3 flex-wrap">
          <Button variant={"outline"}>Nature</Button>
          <Button variant={"outline"}>Food</Button>
          <Button variant={"outline"}>Travel</Button>
          <Button variant={"outline"}>Film</Button>
        </div>

    <div className="flex p-3 gap-1 items-center">
    <div className="text-sm underline">See Trending Searches</div>

        <ArrowTopRightIcon />
        </div>
      </div>
    </>
  );
};

export default Card;
