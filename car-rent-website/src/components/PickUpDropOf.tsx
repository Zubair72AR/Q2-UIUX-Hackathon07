import React from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function PickUpDropOf() {
  return (
    <div className="flex justify-between items-center my-6 px-6 md:px-8 lg:px-16 2xl:px-24">
      <div className="bg-white px-12 py-8 rounded-lg w-[45%] space-y-6">
        <div className="flex justify-start items-center gap-2">
          <span className="w-[10px] h-[10px] bg-primary inline-block rounded-full border-2 border-blue-300 "></span>
          <p className="text-sm font-semibold ">Pick - Up</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-4 rounded-md">
        <LuArrowDownUp className="text-primary-foreground text-2xl" />
      </div>
      <div className="bg-white px-12 py-8 rounded-lg w-[45%] space-y-6">
        <div className="flex justify-start items-center gap-2">
          <span className="w-[10px] h-[10px] bg-primary inline-block rounded-full border-2 border-blue-300 "></span>
          <p className="text-sm font-semibold ">Pick - Up</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
