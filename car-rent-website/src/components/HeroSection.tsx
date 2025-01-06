import React from "react";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center px-6 md:px-8 lg:px-16 2xl:px-24">
    
      <div className="bg-[#54A6FF] bg-[url('/AdsOne.png')] w-[49%] h-96 bg-center bg-no-repeat rounded-xl">Hero image 02</div>
      <div className="bg-primary bg-[url('/AdsTwo.png')] w-[49%] h-96 bg-center bg-no-repeat rounded-xl">Hero image 02</div>
    </div>
  );
}
