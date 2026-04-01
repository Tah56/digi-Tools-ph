import React, { Suspense } from 'react';
import TransparentCard from './TransparentCard';

const fetchData =async()=>{
    const res = await fetch("/transparentPricing.json")
    const data =await res.json();
    
    return data
}
const TransparentPricing = () => {
    const fetch =fetchData()
    console.log(fetch);
    
    return (
        <div className='py-32'>
            <div className='text-center mb-10 space-y-5'>
                <h1 className='font-extrabold text-2xl lg:text-5xl'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex items-center justify-center'>
            <Suspense>

            <TransparentCard  fetch={fetch}></TransparentCard>
            </Suspense>
            </div>
        </div>
    );
};

export default TransparentPricing;