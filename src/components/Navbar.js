import React from 'react';
import logo from '../Assets/logo-p.png';
import slogo from '../Assets/tlogo-p.png';
import info from '../Assets/info.PNG';
import { BiSolidCategory, BiCategoryAlt } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { MdAccountBox } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs"
import {IoIosArrowDropdown} from "react-icons/io";

const Navbar = () => {
    return (
        <div className="overflow-hidden sticky top-0 z-10">
            <div className=" bg-[#0071dc] text-[#fff] flex items-center justify-between py-4 px-4">
                {/* left */}
                <div className="flex items-center gap-6">
                    <AiOutlineMenu className=' text-[30px] lg:hidden' />
                    <img src={slogo} alt="" className=' h-8 lg:hidden ' />
                </div>
                <div className="hidden lg:flex items-center gap-x-8">
                    <img src={logo} alt="" className="cursor-pointer h-14 p-3 hover:bg-[#06529a] p-2 rounded-full" />
                    <div className="cursor-pointer flex  items-center gap-2 hover:bg-[#06529a] p-2 rounded-full">
                        <BiSolidCategory className='text-[17px]' />
                        <p className='text-[15px] font-bold'>Categories</p>
                    </div>
                    <div className="cursor-pointer flex items-center gap-2 hover:bg-[#06529a] p-2 rounded-full">
                        <BiCategoryAlt className='text-[20px]' />
                        <p className='text-[15px] font-bold'>Best Deals</p>
                    </div>
                </div>
                {/* middle */}
                <div className="relative flex items-center flex-1 mx-4">
                    <input type="search" placeholder='Search Plentimart' className='w-0 flex-1 rounded-full px-5 py-2 text-black outline-0' />
                    <div className="cursor-pointer absolute p-1.5 bg-[#ffc220] rounded-full right-1.5"><GoSearch className='text-black' /></div>
                </div>
                {/* right */}
                <div className="flex items-center gap-x-6">
                    <div className="cursor-pointer hidden lg:flex  items-center gap-2 hover:bg-[#06529a] p-2 rounded-full">
                        <GiSelfLove className='text-[17px]' />
                        <div className="">
                            <p className='text-[11px] font-bold'>Reorder</p>
                            <p className='text-[15px] font-bold'>My Orders</p>
                        </div>
                    </div>
                    <div className="cursor-pointer hidden lg:flex items-center gap-2 hover:bg-[#06529a] p-2 rounded-full">
                        <MdAccountBox className='text-[20px]' />
                        <div className="">
                            <p className='text-[11px] font-bold'>Sign in</p>
                            <p className='text-[15px] font-bold'>Account</p>
                        </div>
                    </div>
                    <div className="cursor-pointer flex-y items-center justify-center hover:bg-[#06529a] p-2 rounded-full">
                        <AiOutlineShoppingCart className='h-6 w-6' />
                        <p className='text-[11px]'>$0.00</p>
                    </div>
                </div>
            </div>
            {/* Info */}
            <div className="bg-white h-0.5 sm:hidden"></div>
            <div className="flex items-center bg-[#0071dc] text-white py-2 px-4 whitespace-nowrap gap-10">
                <div className="cursor-pointer flex items-center gap-2 sm:flex-1">
                    <div className="flex items-center gap-1.5">
                        <img src={info} alt="" className='rounded-full h-5 object-fit' />
                        <p className='text-[13px] font-bold'>How do you want your items?</p>
                        <IoIosArrowDropdown className='sm:hidden'/>
                    </div>
                    <span class="font-light text-[15px]">|</span>
                    <div className="flex gap-2 ">
                        <div className="cursor-pointer flex items-center gap-1.5 sm:hidden">
                            <CiLocationOn />
                            <p className='text-[14px] '>Sacremento, 95829</p>
                        </div>
                        <p className=''>95829</p>
                        <div className="cursor-pointer flex items-center gap-1.5 sm:hidden">
                            <BsHouseDoor />
                            <p className='text-[14px] '>Sacremento Supercenter</p>
                        </div>
                    </div>
                </div>
                <div className="hidden cursor-pointer lg:flex items-center text-[14px] font-bold gap-5 whitespace-nowrap">
                    <a>Deals</a>
                    <a>Groceries & Essentials</a>
                    <a>Thanksgiving</a>
                    <a >The Holiday Shop</a>
                    <a href>Gift Finder</a>
                    <a href="">Electronics</a>
                </div>
                <IoIosArrowDropdown className='lg:hidden md:hidden text-[20px]'/>
            </div>
        </div>
    )
}

export default Navbar
