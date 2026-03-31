import React from 'react';

const RatingSection = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-14 flex items-center justify-evenly flex-wrap '>
                 <div className='items-center flex flex-col text-white space-y-2.5 '>
                    <h2 className='font-extrabold text-6xl'>50k</h2>
                    <p className='opacity-80 font-medium text-2xl'>Active Users</p>
                 </div>
                 
                 <div className='items-center flex flex-col text-white border-r border-l py-10 md:px-40 space-y-2.5'>
                    
                    <h2 className='font-extrabold text-6xl'>200+</h2>
                    <p className='opacity-80 font-medium text-2xl'>Premium Tools</p>
                    
                 </div>
                 
                 <div className='items-center flex flex-col text-white space-y-2.5'>
                    <h2 className='font-extrabold text-6xl'>4.9</h2>
                    <p className='opacity-80 font-medium text-2xl'>Rating</p> 
                 </div>
            </div>
        </div>
    );
};

export default RatingSection;