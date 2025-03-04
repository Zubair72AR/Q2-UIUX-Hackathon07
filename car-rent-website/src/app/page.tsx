import HeroSection from "@/components/HeroSection";
import PickUpDropOf from "@/components/PickUpDropOf";
import PopularCar from "@/components/PopularCar";
import TestButton from "@/components/testButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-200">
      <HeroSection />
      <PickUpDropOf />
      <PopularCar />
      <TestButton />
    </div>
  );
}
