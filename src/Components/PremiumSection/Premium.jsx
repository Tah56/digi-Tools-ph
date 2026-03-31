import React, { useState } from 'react';
import PremiumDatas from '../PremiumDatas/PremiumDatas';
import { Suspense } from 'react'
import CartSetcion from '../CartSectioin/CartSetcion';

const premiumData = async() =>{
    const res = await fetch("/PremiumCardData.json")
    const data =  res.json();
    // console.log(data);
    return data
}

const Premium = () => {
    const cardData = premiumData()
    const [status,setStatus]=useState("products")
    return (
        <div className='max-w-11/12 w-full mx-auto py-32'>
            <div className='space-y-4'>
             <h2 className='text-center font-extrabold text-5xl '>Premium digital Tools</h2>
            <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            
            </div>
            <div className=' w-50 mx-auto rounded-2xl my-10 '>
                <button onClick={()=>{setStatus("products")}} className={`btn btn-ghost rounded-2xl ${status === "products"? 'bg-[#9514FA]   text-white':""}`}
                >products</button>
                <button onClick={()=>{setStatus('cart')}} className={`btn btn-ghost rounded-2xl ${status === "cart"? 'bg-[#9514FA] shadow-md text-white':""}`}>card (0)</button>
            </div>
       
          

           { status==="products"?<Suspense fallback={ 
            <div className=' flex flex-col items-center  p-30'>
        
                <span className="loading loading-spinner loading-xl"></span>
            </div>
            }>

            <PremiumDatas cardData={cardData}></PremiumDatas>
            </Suspense>: <CartSetcion></CartSetcion>}
            
        </div>
    );
};

export default Premium;