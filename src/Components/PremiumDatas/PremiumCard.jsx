import React from "react";
import { toast } from "react-toastify";

const PremiumCard = ({data, cart ,setCart}) => {

  const handleCart = ()=>{
    setCart([...cart,data])
    toast.success(`${data.name} is added to cart`)
  }
  
  return (
    <div>
      <div className="card max-w-96  bg-base-100 shadow-sm ">
        <div className="card-body">
          <h2 className={`${data.tag === "new" ? ' text-[#0A883E] bg-[#DBFCE7]': data.tag === "popular"? " text-[#9514FA] bg-[#E1E7FF]":"bg-[#FEF3C6] text-[#BB4D00]"}  px-3 py-1.5 w-24 font-medium rounded-2xl flex items-center justify-center text-center`}>{data.tag}</h2>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{data.name}</h2>
          </div>
          <p className="text-[#627382]">{data.description}</p>
          <div>
            <span className="text-2xl font-bold">${data.price}/<span className="text-[#627382] font-normal text-[16px]">{data.period}</span></span>

          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{data.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
               <span>{data.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{data.features[2]}</span>
            </li>
           
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]" onClick={handleCart}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
