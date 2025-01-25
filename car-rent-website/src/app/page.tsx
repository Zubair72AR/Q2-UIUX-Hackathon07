import HeroSection from "@/components/HeroSection";
import PickUpDropOf from "@/components/PickUpDropOf";
import TestButton from "@/components/testButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <HeroSection />
      <PickUpDropOf />
      <TestButton />
    </div>
  );
}
