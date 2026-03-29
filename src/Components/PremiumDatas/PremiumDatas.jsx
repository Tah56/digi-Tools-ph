import React, { use } from 'react';

const PremiumDatas = ({cardData}) => {
    
    const prm = use(cardData)
    console.log(prm);
    
    
    return (
        <div className='grid grid-cols-3 place-items-center items-center justify-center'>
           {
            prm.map(data =>{
              return  (
                <div className='border'>

                    <h2>{data.name}</h2>
                </div>

              )
            })
           }
        </div>
    );
};

export default PremiumDatas;