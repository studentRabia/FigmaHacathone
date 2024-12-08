import Image from "next/image";
import React from "react";
import Chair from "../../../public/images/Chair.png"
import Chairg from "../../../public/images/Chairg.png"
import Chairw from "../../../public/images/Chairw.png"
import Chairwe from "../../../public/images/Chairwe.png"
const ChairLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 p-6 w-full mx-auto max-w-[1200px]">
      {/* Left Section */}
      <div className="relative flex items-center justify-center ">
        <Image
          src={Chair} // Replace with the actual path to the orange chair image
          alt="Orange Chair"
          className="w-[300px] h-auto lg:w-[400px] object-cover"
        />
        <div className="absolute -left-10 lg:-left-48 top-1/2 -translate-y-1/2 rotate-[-90deg] text-lg font-semibold text-[#272343]">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4 mr-80">
        <Image
          src={Chairw} // Replace with the path for Chair 1
          alt="Chair 1"
          className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
        />
        <Image
          src={Chairwe} // Replace with the path for Chair 2
          alt="Chair 2"
          className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
        />
        <Image
          src={Chairg} // Replace with the path for Chair 3
          alt="Chair 3"
          className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
        />
        <Image
          src={Chairw} // Replace with the path for Chair 4
          alt="Chair 4"
          className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
        />
      </div>
    </div>
  );
};

export default ChairLayout;
