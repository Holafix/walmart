import React from 'react';
import {FaRegCopyright} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='lg:pt-20 pt-10 border border-top-solid'>
            {/* Feedback */}
            <div className="py-8 flex flex-col items-center justify-center text-center gap-3 lg:bg-[#E6F1FC]">
                <p className="text-[15px]">We'd love to hear what you think!</p>
                <p className="px-5 py-2 border border-solid border-black bg-white rounded-full font-semibold cursor-pointer text-[15px] hover:border-2">Give feedback</p>
            </div>
            {/* Footer */}
            <div className="lg:text-center lg:px-10 px-6 py-5 text-black border border-top-solid lg:bg-[#004F9A] lg:text-white">
                <div className="text-[14px] flex flex-col text-left lg:flex flex-wrap lg:items-center justify-center gap-x-5 gap-y-5 lg:gap-y-1">
                    <p className='cursor-pointer'>All Departments</p>
                    <p className='cursor-pointer'>Store Directory</p>
                    <p className='cursor-pointer'>Careers</p>
                    <p className='cursor-pointer'>Our Company</p>
                    <p className='cursor-pointer'>Sell on Plentimart.com</p>
                    <p className='cursor-pointer'>Help</p>
                    <p className='cursor-pointer'>Covid-19 Vaccine Scheduler</p>
                    <p className='cursor-pointer'>Product Recalls</p>
                    <p className='cursor-pointer'>Accessibility</p>
                    <p className='cursor-pointer'>Tax Exempt Program</p>
                    <p className='cursor-pointer'>Get the Plentimart App</p>
                    <p className='cursor-pointer'>Sign-up for Email</p>
                    <p className='cursor-pointer'>Safety Data Sheet</p>
                    <p className='cursor-pointer'>Terms of Use</p>
                    <p className='cursor-pointer'>Privacy & Security</p>
                    <p className='cursor-pointer'>California Supply Chain Act</p>
                    <p className='cursor-pointer'>Your Privacy Choices</p>
                    <p className='cursor-pointer'>Notice at Collection</p>
                    <p className='cursor-pointer'>Request My Personal Information</p>
                    <p className='cursor-pointer'>Brand Shop Directory</p>
                </div>
                <div className="mt-5 text-[12px] flex flex-row items-center lg:justify-center mt-10 gap-1 lg:mt-0"> 
                <FaRegCopyright/>
                <p>2023 Plentimart. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
