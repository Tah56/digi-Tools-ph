import React from "react";
import hero from "../../assets/banner.png";
import icon from "../../assets/Group 5.png";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col flex-wrap lg:flex-row-reverse">
        <div className=" max-w-3xs md:max-w-lg flex items-center justify-center ">

        <img src={hero}  className="w-full h-full rounded-lg shadow-2xl" />
        </div>

        <div>
          <div className="bg-[#E1E7FF] inline-block rounded-full p-2 mb-4 ">
            <div className="flex items-center gap-2">

            <img className="w-5 h-5" src={icon} alt="" />

            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
              New: AI-Powered Tools Available
            </p>
            </div>
          </div>

          <h1 className="md:text-7xl font-extrabold leading-20">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-lg text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          <div className="flex gap-4 flex-wrap items-center justify-center">

          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full">Explore Products</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold  rounded-full border bg-clip-text text-transparent border-[#9514FA]"><Play color="#9514FA" />Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
