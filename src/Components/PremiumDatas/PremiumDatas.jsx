import React, { use } from 'react';
import PremiumCard from './PremiumCard';

const PremiumDatas = ({cardData}) => {
    
    const prm = use(cardData)
   
    
    
    return (
        <div className='grid grid-cols-3 place-items-center items-center justify-center space-y-5'>
           {
            prm.map(data => <PremiumCard key={data.id} data={data}></PremiumCard> )
           }
        </div>
    );
};

export default PremiumDatas;