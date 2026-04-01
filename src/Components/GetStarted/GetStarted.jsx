import React from "react";
import user1 from "../../assets/user.png";
import package1 from "../../assets/package.png";
import rocket from "../../assets/rocket.png"

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] py-32">
      <div className="space-y-10">
        <div className="  flex flex-col items-center justify-center gap-5">
          <h2 className="font-extrabold text-3xl lg:text-5xl">Get Started In 3 Steps</h2>
          <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className=" flex flex-col lg:flex-row items-center justify-center gap-8">
          <div>
            <div className="card bg-base-100 shadow-sm py-10">
                <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full flex items-center justify-center ml-auto mr-5">
              <h2 className="text-right">01</h2>

                </div>
              <figure className="px-10 pt-10  ">
                <div className="w-20 h-20 bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full  flex justify-center items-center  ">
                  <img src={user1} alt="Shoes" className=" " />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">Create Account</h2>
                <p className="text-[#627382]">
                  Sign up for free in seconds. 
                  No credit card <br/>required to get started.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-base-100  shadow-sm py-10">
              <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full flex items-center justify-center ml-auto mr-5">
              <h2 className="text-right">02</h2>

                </div>
              <figure className="px-10 pt-10  ">
                <div className="w-20 h-20 bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full  flex justify-center items-center  ">
                  <img src={package1} alt="Shoes" className=" " />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">Choose Products</h2>
                <p className="text-[#627382]">
             Browse our catalog and select the tools <br />that fit your needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100  shadow-sm py-10">
             <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full flex items-center justify-center ml-auto mr-5">
              <h2 className="text-right">03</h2>

                </div>
              <figure className="px-10 pt-10  ">
                <div className="w-20 h-20 bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full  flex justify-center items-center  ">
                  <img src={rocket} alt="Shoes" className=" " />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">Start Creating</h2>
                <p className="text-[#627382]">
                 Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
