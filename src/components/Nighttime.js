import RefreshButton from "../assets/desktop/icon-refresh.svg"
import MoonIcon from "../assets/desktop/icon-moon.svg"
import {useState} from "react";
import ArrowDown from "../assets/desktop/icon-arrow-down.svg";
import ArrowUp from "../assets/desktop/icon-arrow-up.svg";




function Nighttime(props) {
    const [showMore, setShowMore] = useState(true);
    const changeShowMore = () => {
        setShowMore(!showMore)
    };

    const [isClicked, setIsClicked] = useState(false);

    const SetClicked = () => {
        setIsClicked(!isClicked);
    }






    return (

        <>
            <div className={'background-container'}>
            {
                showMore ? (
                    <>

                        <div className="bg-center min-h-screen bg-cover nighttime text-white">
                            <div className="flex flex-col min-h-screen justify-between container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={'transition-all duration-500'}>
                                    <div className="max-w-screen-lg max-h-screen flex">

                                        <div className="pt-3 md:pt-8 lg:pt-12 flex flex-col w-full transition-all duration-1000">
                                            <div className="flex items-center">
                                                <div className="max-w-xl">
                                                    <p className="quote-text">"{props?.content}"</p>
                                                </div>
                                                <button className="ml-4" onClick={props.fetchQuote}>
                                                    <div className="mt-3">
                                                        <img src={RefreshButton} alt="Refresh" />
                                                    </div>
                                                </button>
                                            </div>
                                            <h5 className="mt-[13px]">{props.author}</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row sm:pt-3 md:pt-16 lg:pb-24 sm:mb-8 lg:mb-12">
                                    <div className="md:w-4/5">
                                        <div className="flex items-center">
                                            <img src={MoonIcon} alt="Sun Icon" />
                                            <div className="hidden md:block">
                                                <h4 className={'ml-2'}>GOOD MORNING, IT’S CURRENTLY</h4>
                                            </div>

                                            {/* Content for mobile devices only */}
                                            <div className="block md:hidden">
                                                <h4 className={'ml-2'}>GOOD EVENING</h4>
                                            </div>
                                        </div>
                                        <div className="flex mt-4 items-center">
                                            <h1 className="">{props.clock}</h1>
                                            <p className="ml-2 leading-7 mt-auto">BST</p>
                                        </div>
                                        <h3 className="mt-4"> IN {props.city},{props.country}</h3>
                                    </div>
                                    <div className="mt-auto">
                                        {
                                            isClicked ? (
                                                <button onClick={() => {changeShowMore(); SetClicked();}}>
                                                    <div className={'bg-white flex p-3 rounded-full '}>
                                                        <div className={''}><h6 className={'text-gray-300 ml-2 '}>MORE</h6></div>
                                                        <div className={'bg-arrow items-center rounded-full p-2 ml-2 hover:bg-arrow-hover '}> <img src={ArrowDown} alt={'arrow down'} className={'mt-auto mt-0.5'}/> </div>
                                                    </div>
                                                </button>
                                            ) : (
                                                <button onClick={() => {changeShowMore(); SetClicked();}}>
                                                    <div className={'bg-white flex p-3 rounded-full '}>
                                                        <div className={''}><h6 className={'text-gray-300 ml-2 '}>MORE</h6></div>
                                                        <div className={'bg-arrow items-center rounded-full p-2 ml-2 hover:bg-arrow-hover '}> <img src={ArrowDown} alt={'arrow down'} className={'mt-auto mt-0.5'}/> </div>
                                                    </div>
                                                </button>
                                            )
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={'h-screen nighttime text-white flex flex-col  '}>
                            <div className={'transition-all duration-500 '}>
                                <div className="flex flex-col md:flex-row sm:pt-3 md:pt-16 lg:pb-24 sm:mb-8 lg:mb-12">
                                    <div className="md:w-4/5 container mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="flex items-center">
                                            <img src={MoonIcon} alt="Sun Icon" />
                                            <div className="hidden md:block">
                                                <h4 className={'ml-2'}>GOOD MORNING, IT’S CURRENTLY</h4>
                                            </div>

                                            {/* Content for mobile devices only */}
                                            <div className="block md:hidden">
                                                <h4 className={'ml-2'}>GOOD EVENING</h4>
                                            </div>
                                        </div>
                                        <div className="flex mt-4 items-center">
                                            <h1 className="">{props.clock}</h1>
                                            <p className="ml-2 leading-7 mt-auto">BST</p>
                                        </div>
                                        <h3 className="mt-4">{props.city}</h3>
                                    </div>
                                    <div className="mt-auto transition-all duration-500">
                                        {
                                            isClicked ? (
                                                <button onClick={() => {changeShowMore(); SetClicked();}} className={'mr-32'}>
                                                    <div className={'bg-white flex p-3 rounded-full  justify-center items-center '}>
                                                        <div className={''}><h6 className={'text-gray-300 ml-2 mx-auto my-auto items-center '}>LESS</h6></div>
                                                        <div className={'bg-arrow items-center rounded-full p-2 ml-2  '}> <img src={ArrowUp} alt={'arrow up'} className={'mt-auto mt-0.5 '}/> </div>
                                                    </div>
                                                </button>
                                            ) : (
                                                <button onClick={() => {changeShowMore(); SetClicked();}}>
                                                    <div className={'bg-white flex p-3 rounded-full '}>
                                                        <div className={''}><h6 className={'text-gray-300 ml-2 '}>MORE</h6></div>
                                                        <div className={'bg-arrow items-center rounded-full p-2 ml-2 hover:bg-arrow-hover '}> <img src={ArrowDown} alt={'arrow down'} className={'mt-auto mt-0.5'}/> </div>
                                                    </div>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={'w-full h-1/2 bg-black  transition-all duration-500 text-white '}>
                                <div className={'ml-[165px] mr-[431px] mt-6 mb-74px] transition-all duration-500'}>
                                    <div className={'grid sm:grid-cols-3  grid-cols-1 pt-12 transition-all duration-1000'}>
                                        <div>
                                            <div className={'transition-all duration-500'} >
                                                <h4 className={''}>CURRENT TIMEZONE</h4>
                                                <h2 className={' mt-4'}>{props?.location}</h2>
                                            </div>
                                            <div className={'pt-12'}>
                                                <h4 className={''}>DAY OF THE YEAR</h4>
                                                <h2 className={' mt-4'}>{props?.day_of_y}</h2>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-[2px] rounded-full h-full bg-gray-400"></div>
                                        </div>
                                        <div>
                                            <div>
                                                <h4 className={''}>DAY OF THE WEEK</h4>
                                                <h2 className={'t mt-4'}>{props?.day_of_w}</h2>
                                            </div>
                                            <div className={'pt-12'}>
                                                <h4 className={''}>WEEK NUMBER</h4>
                                                <h2 className={' mt-4'}>{props?.week_num}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </>
                )
            }

            {/*<div className="pt-3 md:pt-8 lg:pt-12 flex flex-col w-full">*/}
            {/*    <div className="flex items-center">*/}
            {/*        <div className="max-w-xl">*/}
            {/*            <p className="quote-text">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>*/}
            {/*        </div>*/}
            {/*        <button className="ml-4">*/}
            {/*            <div className="mt-3">*/}
            {/*                <img src={RefreshButton} alt="Refresh" />*/}
            {/*            </div>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <h5 className="mt-[13px]">Ada Lovelace</h5>*/}
            {/*</div>*/}
            </div>
        </>
    )
}

export default Nighttime;