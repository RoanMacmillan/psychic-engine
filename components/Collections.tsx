import Image from "next/image";
import React from "react";


const Collections = () => {
  return <div className="border relative p-4 flex items-end  sm:h-[150px] md:h-[200px]   rounded-sm">

    <div className="text-white relative z-20">
    <h1 className="text-white text-xs">Discover Photop+</h1>
    <div>Unlimited Downloads.</div>
    <div>Premium Images.</div>
    <div className="">No ads.</div>
    </div>

    <Image 
    
    src='https://images.unsplash.com/photo-1535446937720-e4cad0145efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlnbmV0dGV8ZW58MHx8MHx8fDA%3D'
    width={500}
    height={500}
    className="absolute left-0 top-0 brightness-75"
    alt='Picture'
    />


  </div>;
};

export default Collections;
