import React from 'react';
import img1 from "../../assets/products/writing_2327400 1.png"
import img2 from "../../assets/products/portfolio.png"
import img3 from "../../assets/products/social-media.png"

const Carts = ({cart , totalFilter}) => {
    
    return (
        <div>
            {
                cart.map((items,index)=>{
                    return <div key={index} className='flex flex-col lg:flex-row items-center justify-between gap-5 bg-[#F9FAFC] p-10 mb-5 '>
                        <div className='flex  gap-3'>
                            <div className='w-12 h-12  rounded-full drop-shadow-xl bg-white p-2 flex items-center justify-center'>

                            <img className='w-full' src={items.tag === "popular"?img2:items.tag === "new"? img3:img1} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>{items.name}</h2>
                                <p className='text-[#627382] font-medium'>{items.price}$/{items.period}</p>
                            </div>
                        </div>
                        <button onClick={()=>{totalFilter(index)}} className='btn text-red-500'>Remove</button>
                    </div>
                })
            }
            
        </div>
    );
};

export default Carts;