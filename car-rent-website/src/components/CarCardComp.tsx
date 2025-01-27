import React from "react";

interface CarCardType {
  head: string;
  subHead: string;
  heartColor: string;
  carImage: string;
  litter: number;
  vehicleType: string;
  sittingCapacity: number;
  price: number;
  oldPrice: number;
  buttonText: string;
  className: string;
}

export default function CarCardComp({
  head,
  subHead,
  heartColor,
  carImage,
  litter,
  vehicleType,
  sittingCapacity,
  price,
  oldPrice,
  buttonText,
  className,
}: CarCardType) {
  return <div>CarCardComp</div>;
}
