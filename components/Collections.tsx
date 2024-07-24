import Image from "next/image";
import React from "react";


const Collections = () => {
  return <div className="border relative  rounded-sm">

    <h1>Discover Photop+</h1>
    <div>Unlimited Downloads</div>
    <div>Premium Images</div>
    <div>No ads</div>

    <Image 
    
    src='https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    width={500}
    height={500}
    className="absolute left-0 top-0"
    alt='Picture'
    />


  </div>;
};

export default Collections;
