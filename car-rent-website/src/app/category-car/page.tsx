"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CarsDataType } from "../../../types/CarsDataType";
import { client } from "@/sanity/lib/client";
import { CarGroqQuery } from "@/sanity/lib/queries";
import CarCardComp from "@/components/CarCardComp";
import { urlFor } from "@/sanity/lib/image";
import PickUpDropOf from "@/components/PickUpDropOf";

export default function CategoryCars() {
  // Storing Data in the UseState Hook from Sanity CMS
  const [carSanity, setCarSanity] = useState<CarsDataType[]>([]);
  // Use State for Error Handling
  const [error, setError] = useState<string | null>(null);
  // Use State for Loading Text Display
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch and Store Data from Sanity
  // All Cars Data Fetching from Sanity
  useEffect(() => {
    const getCarsData = async () => {
      try {
        // Fetching Data
        const fetchedCarsData: CarsDataType[] =
          await client.fetch(CarGroqQuery);
        // Store Data in the useState
        setCarSanity(fetchedCarsData);
      } catch (error) {
        console.error("Error fetching Cars Data:", error);
        setError("Failed to load Cars Data ❌");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getCarsData();
  }, []);

  //   // Filter Cars by Category
  //   const filteredCarsByCategory = Cars.filter(
  //     (val) => val.categoryName === "Chairs"
  //   );

  // Loading / Rendering Cars Data
  if (loading)
    return (
      // Show Loading State
      <div className="w-full grid place-items-center my-10 gap-y-6">
        {/* Loading Image */}
        <Image
          src="/Loading.svg"
          alt="Loading Icon"
          width={200}
          height={200}
          className="rotate-clock w-12 h-12 md:w-16 md:h-16 dark:opacity-50"
        />
        <p className="font-semibold md:text-xl">Loading Cars . . .</p>
      </div>
    );

  return (
    <div className="flex justify-between items-start pr-6 md:pr-8 lg:pr-16 2xl:pr-24 bg-zinc-200">
      <div className="w-[360px] h-screen bg-purple-500"></div>
      <div className="ml-6">
        <PickUpDropOf />
        {/* If Finds An Error while Fetching Data */}
        {error ? (
          <p className="font-bold text-2xl text-red-700 grid place-items-center h-32 col-span-2">
            {error}
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {carSanity.map((value) => {
              // Check if the product has an image
              const imageUrl = value.image
                ? urlFor(value.image).url()
                : "/Placeholder.svg";
              return (
                <CarCardComp
                  head={value.name}
                  subHead={value.brand}
                  heartColor="white"
                  carImage={imageUrl}
                  litter={value.fuelCapacity}
                  vehicleType={value.transmission}
                  sittingCapacity={value.seatingCapacity}
                  price={value.pricePerDay}
                  oldPrice={value.originalPrice}
                  buttonText="Rent Now"
                  className=""
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
