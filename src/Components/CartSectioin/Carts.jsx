import React from 'react';

const Carts = ({cart , totalFilter}) => {
    
    return (
        <div>
            {
                cart.map((items,index)=>{
                    return <div key={index} className='flex items-center justify-between bg-[#F9FAFC] p-10 mb-5 '>
                        <div className='flex'>
                            <img src="" alt="" />
                            <div>
                                <h2>{items.name}</h2>
                                <p>{items.price}</p>
                            </div>
                        </div>
                        <button onClick={()=>{totalFilter(index)}} className='btn '>Remove</button>
                    </div>
                })
            }
            
        </div>
    );
};

export default Carts;