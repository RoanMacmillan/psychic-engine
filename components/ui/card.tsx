import React, { useState } from "react";
import { Button } from "./button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Card = () => {





  return (
    <>
      <div className="border sm:flex flex-col justify-between rounded-sm sm:h-[9.375rem] md:h-[200px]">
        <div className="flex gap-2 p-3 flex-wrap">
          {buttons.map((button, index) => (

            <div key={index}>

            <Button variant='outline'>{button}</Button>

            </div>

          ))}
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


const buttons = [

    'Nature', 'Food', 'Travel', 'Film'

]