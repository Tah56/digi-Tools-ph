import React, { use } from 'react';

const TransparentCard = ({fetch}) => {
    const carts = use(fetch)
    
    
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
             {
                carts.map((cart)=>{
                    return<div key={cart.id}>
                  <div  className={`card max-w-96    ${ cart.tag ==="Most popular"&&"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} bg-[#F9FAFC] shadow-sm rounded-2xl`}>
                    <div className="card-body">
                      <div className="flex items-center justify-between">
            
                      
{                      cart.tag==="Most popular"?<h2 className={` absolute -top-5 left-1/3 ${cart.tag === "new" ? ' text-[#0A883E] bg-[#DBFCE7]': cart.tag === "popular"? " text-[#9514FA] bg-[#E1E7FF]":"bg-[#FEF3C6] text-[#BB4D00]"}  px-3 py-1.5  font-medium rounded-2xl flex items-center justify-center text-center`}>{cart.tag}</h2>:''
}                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{cart.name}</h2>
                      </div>
                      <p className={cart.tag==="Most popular"?"tex-white":"text-[#627382]"}>{cart.description}</p>
                      <div>
                        <span className="text-2xl font-bold">${cart.price}/<span className="text-[#627382] font-normal text-[16px]">{cart.period}</span></span>
            
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
                          <span>{cart.features[0]}</span>
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
                           <span>{cart.features[1]}</span>
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
                           <span>{cart.features[2]}</span>
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
                           <span>{cart.features[3]}</span>
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
                          <span>{cart.features[4]}</span>
                        </li>
                       
                      </ul>
                      <div className="mt-6">
                        <button className={`btn btn-primary btn-block  rounded-full ${cart.tag==="Most popular" ? "bg-white text-black":" bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} `} >{cart.tag==="new"?"Get Started Free": cart.tag==="Most popular"?"Start Pro Trial": "Contact Sales"}</button>
                      </div>
                    </div>
                  </div>
                </div>
                })
             }
        </div>
    );
};

export default TransparentCard;