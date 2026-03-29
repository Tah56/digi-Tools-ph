import React from 'react';
import PremiumDatas from '../PremiumDatas/PremiumDatas';
import { Suspense } from 'react'

const premiumData = async() =>{
    const res = await fetch("/PremiumCardData.json")
    const data =  res.json();
    // console.log(data);
    return data
}

const Premium = () => {
    const cardData = premiumData()
    return (
        <div>
            <h2 className='text-center'>Premium digital Tools</h2>
            
          

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

            <PremiumDatas cardData={cardData}></PremiumDatas>
      </Suspense>
            
        </div>
    );
};

export default Premium;