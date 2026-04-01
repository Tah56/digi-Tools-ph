import React from 'react';

const ReadySection = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-32'>
            <div className='max-w-11/12 mx-auto flex flex-col items-center space-y-5'>
                <h2 className='text-white font-bold text-5xl'>Ready to Transform Your Workflow?</h2>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className=' flex gap-5'>
                    <button className='btn bg-white rounded-full'>Explore Products</button> 
                    <button className='btn rounded-full bg-transparent text-white'> View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default ReadySection;