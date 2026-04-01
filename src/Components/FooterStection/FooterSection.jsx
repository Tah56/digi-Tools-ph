import React from 'react';
import facebook from "../../assets/Facebook.png";
import insta from "../../assets/Instagram.png";
import twitter from "../../assets/Twitter.png"
const FooterSection = () => {
    return (
        <footer className='py-32 bg-[#101727] text-white'>
            <div className='flex flex-col mx-auto max-w-11/12'>
                <div className='flex flex-col lg:flex-row items-center  justify-evenly cursor-pointer mb-20'>
                    <div className='space-y-5'>
                        <h2 className='text-4xl font-bold'>DigiTools</h2>
                        <p className='opacity-80'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>

                    <div>
                        <h2 className='text-lg font-medium mb-5'> Product</h2>
                            <ul className='space-y-5 opacity-80'>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Templates</li>
                                <li>Integrations</li>
                            </ul>
                    </div>

                    <div>
                        <h2 className='text-lg font-medium mb-5'> Company</h2>
                            <ul className='space-y-5 opacity-80'>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ul>
                    </div>

                    <div>
                        <h2 className='text-lg font-medium mb-5'> Resources</h2>
                            <ul className='space-y-5 opacity-80'>
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-center text-lg font-medium'>social Links</h2>
                        <div className='flex items-center justify-center gap-5'>
                            <img src={facebook} alt="" />
                            <img src={insta} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                        
                    </div>
                </div>
                <hr className='opacity-50' />
                <div className='opacity-50 mt-5 flex items-center justify-between '>
                    <h2>© 2026 Digitools. All rights reserved.</h2>
                    <div className='flex items-center gap-2.5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Servic</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;