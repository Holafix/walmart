import meals from '../Assets/meals.jpg';
import airpod from '../Assets/airpod.jpg';
import bedroom from '../Assets/bedroom.jpg';
import crochet from '../Assets/crochet.jpg';
import festive from '../Assets/festive.jpg';
import man from '../Assets/man.PNG';
import teapot from '../Assets/teapot.jpg';
import singing from '../Assets/singing.jpg';
import gifts from '../Assets/gifts.jpg';
import plentimart from '../Assets/plentimart+.PNG';

const Hero = () => {
    return (
        <div className="">
            {/* mobile */}
            <div className="hidden sm:flex flex-col gap-6 m-4">
                <div className="relative">
                    <img src={gifts} alt="" className='rounded-xl'/>
                    <div className="absolute top-3 left-3 text-[#041E42] text-[13px] ">
                        <p>Up to 40% off</p>
                        <p className='text-[40px] mb-5'>Act fast, save <br />big!</p>
                        <span className='bg-white font-bold border-solid border-2 border-[#041e42] px-4 py-2 rounded-full'>Shop now</span>
                    </div>
                </div>

                <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="relative">
                            <img src={meals} alt="" className='rounded-xl'/>
                            {/* <div className="absolute top-1 left-1 text-[13px] text-[#041e42] ">
                                <p className='font-bold'>This year's <br />meal for less</p>
                                <a href="" className='underline decoration-solid'>Shop now</a>
                            </div> */}
                        </div>
                        <div className="relative">
                            <img src={airpod} alt="" className='rounded-xl w-full'/>
                            <div className="absolute top-1 right-3 text-[#041e42] flex-y justify-between gap-10">
                                <p className='text-[13px]' >Up to 65% off</p>
                                <p className='italic text-[30px]'>Flash <br /> Deals</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={singing} alt="" className='rounded-xl'/>
                        <div className="absolute top-1 left-1 text-[#041e42] text-[13px]">
                            <p className='font-bold border-solid border-green'>Festive ugly Christmas <br />'fits</p>
                            <a href="" className='underline decoration-solid'>Shop now</a>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src={plentimart} alt="" className='rounded-xl'/>
                    <p className='absolute bottom-7 text-[#041e42] left-4 text-[13px] underline decoration-solid'>Join PlentiMart+</p>
                </div>
                <div className="relative">
                    <img src={crochet} alt="" className='rounded-xl'/>
                    <div className="absolute top-7 right-3 text-[#2A2D40] text-[25px]">
                            <p className='font-bold italic'>Holiday hang <br /> time</p>
                            <a href="" className='underline decoration-solid text-[15px]'>Shop stockings</a>
                        </div>
                </div>
                <div className="relative">
                    <img src={bedroom} alt="" className='rounded-xl'/>
                    <div className="absolute top-2 left-16 text-[#041e42] text-[20px]">
                            <p className='font-bold'>Prep your <br /> guest room</p>
                            <a href="" className='underline text-[15px]'>Shop home</a>
                        </div>
                </div>

                <div className="flex flex-row gap-6">
                    <div className="relative w-1/2">
                        <img src={man} alt="" className='rounded-xl'/>
                        <div className="bg-white rounded-md p-1 absolute top-1 left-3 text-[#041e42] text-[13px]">
                            <p className='font-bold'>Find presents easily</p>
                            <a href="" className='underline' >Search gift finder</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-1/2">
                        <div className="relative">
                            <img src={teapot} alt="" className='rounded-xl'/>
                            <div className="absolute top-5 left-1 text-[#041e42] text-[13px]">
                            <p className='font-bold'>Every piece <br /> in place</p>
                            <a href="" className='underline'>Shop utensils</a>
                        </div>
                        </div>
                        <div className="relative">
                            <img src={festive} alt="" className='rounded-xl'/>
                            {/* <div className="rounded-sm absolute top-2 left-2 text-[#041e42] text-[13px]">
                                <p className='font-bold'>Stocking suffers <br /> under $5</p>
                                <a href="" className='underline decoration-solid'>Shop now</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* desktop & tablet */}
            <div className='w-full flex flex-row p-6 gap-6 sm:hidden'>
                {/* left */}
                <div className="flex flex-col gap-6">
                    <div className="relative truncate">
                        <img src={meals} alt="" className='rounded-md' />
                        <div className="bg-white absolute top-3 left-3  text-[13px] text-[#041e42] rounded-sm p-3 ">
                            <p className='font-bold'>This year's <br />meal for less</p>
                            <a href="" className='underline decoration-solid'>Shop now</a>
                        </div>
                    </div>
                    <div className="relative truncate">
                        <img src={singing} alt="" className='rounded-md' />
                        <div className="bg-white rounded-md absolute top-3 left-3 text-[#041e42] text-[13px] px-3 py-1">
                            <p className='font-bold border-solid border-green'>Festive ugly Christmas <br />'fits</p>
                            <a href="" className='underline decoration-solid'>Shop now</a>
                        </div>
                    </div>
                    <div className="relative truncate">
                        <img src={crochet} alt="" className='rounded-md' />
                        <div className="absolute top-2 right-3 text-[#2A2D40] text-[13px]">
                            <p className='font-bold'>Holiday hang <br />time</p>
                            <a href="" className='underline decoration-solid'>Shop stockings</a>
                        </div>
                    </div>
                </div>

                {/* middle */}
                <div className="flex flex-col gap-6">
                    <div className="relative truncate">
                        <img src={gifts} alt="" className='rounded-md' />
                        <div className="absolute top-3 left-3 text-[#041E42] text-[13px] ">
                            <p>Up to 40% off</p>
                            <p className='text-[40px] mb-5'>Act fast, save <br />big!</p>
                            <span className='bg-white font-bold border-solid border-2 border-[#041e42] px-4 py-2 rounded-full'>Shop now</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div className="relative truncate">
                            <img src={festive} alt="" className='rounded-md' />
                            <div className="bg-white rounded-sm absolute top-2 left-2 text-[#041e42] p-2 text-[13px]">
                                <p className='font-bold'>Stocking suffers <br /> under $5</p>
                                <a href="" className='underline decoration-solid'>Shop now</a>
                            </div>
                        </div>
                        <div className="relative truncate text-ellipsis bg-[#E18F93] rounded-xl">
                            <img src={airpod} alt="" className='rounded-md' />
                            <div className="absolute top-3 right-3 text-[#041e42] flex-y justify-between gap-10">
                                <p className='text-[13px] mb-3' >Up to 65% off</p>
                                <p className='italic text-[30px]'>Flash <br /> Deals</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative truncate">
                        <img src={plentimart} alt="" className='rounded-md' />
                        <p className='absolute bottom-7 text-[#041e42] left-4 text-[13px] underline decoration-solid'>Join PlentiMart+</p>
                    </div>
                </div>

                {/* right */}
                <div className="flex flex-col gap-6">
                    <div className="relative truncate">
                        <img src={bedroom} alt="" className='rounded-md' />
                        <div className="absolute top-2 left-12 text-[#041e42] text-[13px]">
                            <p className='font-bold'>Prep your <br /> guest room</p>
                            <a href="" className='underline'>Shop home</a>
                        </div>
                    </div>
                    <div className="relative truncate">
                        <img src={teapot} alt="" className='rounded-md' />
                        <div className="absolute top-5 left-2 text-[#041e42] text-[13px]">
                            <p className='font-bold'>Every piece <br /> in place</p>
                            <a href="" className='underline'>Shop utensils</a>
                        </div>
                    </div>
                    <div className="relative truncate">
                        <img src={man} alt="" className='rounded-md' />
                        <div className="bg-white rounded-md p-1 absolute top-1 left-3 text-[#041e42] text-[13px]">
                            <p className='font-bold'>Find presents easily</p>
                            <a href="" className='underline' >Search gift finder</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
