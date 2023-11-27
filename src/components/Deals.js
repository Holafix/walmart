import React from 'react';
import laptop from '../Assets/product/hp.jpeg'
import cooker from '../Assets/product/blackstone.jpeg'
import game from '../Assets/product/xbox.jpeg'
import chair from '../Assets/product/gtracing.jpeg'
import cap from '../Assets/product/gourmia.jpeg'
import cook from '../Assets/product/kitchen.jpeg'
import jet from '../Assets/product/micheal.jpeg'
import { FaPlus } from "react-icons/fa6";
import { IoIosHeartEmpty } from 'react-icons/io';
import '../components/Deals.css';

const Deals = () => {
    return (
        <div className='ml-6 mr-6'>
            {/* Heading */}
            <div className=" flex flex-row justify-between">
                <div className="">
                    <p className='font-bold text-[20px]'>Flash Deals</p>
                    <p className='font-thin'>Up to 65% off</p>
                </div>
                <p className='underline text-[15px]'>View all</p>
            </div>
            <p className=' mt-6 ml-1 text-white bg-[#041E42] w-fit rounded-md px-2 py-1 font-bold text-[12px]'>Black Friday deal</p>
            {/* Product */}
            <div className="product-scroll flex flex-row gap-10 overflow-x-auto scrollbar-none">
                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={game} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={cooker} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={laptop} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={game} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={jet} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={cook} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={cap} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>

                <div className=" py-6 flex flex-col">
                    <div className="relative w-fit">
                        <img src={chair} alt="" className='w-40 object-fit ' />
                        <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                            <IoIosHeartEmpty className='text-[20px]' />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-1 text-[#2A8703] text-[18px] w-fit">
                            <p className='font-semibold whitespace-nowrap'>Now $60.00</p>
                            <span className='line-through text-black'>$100.00</span>
                        </div>
                        <div className="w-48 mt-2">
                            <p>Solitaire 1.25 Carat Moissanite Necklace in ...</p>
                        </div>
                        <div className="w-fit border-black border-solid border mt-2 rounded-full px-5 py-1 gap-1 flex flex-row justify-center items-center">
                            <FaPlus className='align-bottom' />
                            <p>Add</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Deals
