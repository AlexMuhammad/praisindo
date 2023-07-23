import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { BiSliderAlt, BiLayer, BiSortAlt2, BiSolidStar, BiDownArrowAlt } from "react-icons/bi"
import Mandiri from "../../assets/images/mandiriwebp.webp"
import { PropTypes } from "prop-types"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabFilter = ({ as }) => {
    let [categories] = useState({
        "Mutual Funds": [
            {
                id: 1,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 2,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 3,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 4,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
        ],
        Bonds: [
            {
                id: 1,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 2,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 3,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 4,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
        ],
        Stocks: [
            {
                id: 1,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 2,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 3,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
            {
                id: 4,
                title: 'Bahana Dana Likuid',
                market: "Money Market",
                income: "Conservative",
                icon: <BiSolidStar />,
                image: Mandiri,
                purchase: "IDR 300 K",
                price: "IDR 1,168.40",
                return: "5.50%"
            },
        ],
    })

    return (
        <>
            {(() => {
                switch (as) {
                    case "product":
                        return <div className="w-full max-w-full py-16 sm:px-0">
                            <Tab.Group>
                                <Tab.List className="fixed flex w-full space-x-1 bg-white sm:max-w-xl">
                                    {Object.keys(categories).map((category) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-sm font-medium leading-5 text-gray-400 outline-none',
                                                    selected
                                                        ? 'text-prs-primary border-b-2 bottom-0 border-prs-primary'
                                                        : 'text-blue-100 '
                                                )
                                            }
                                        >
                                            {category}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <div className='flex items-center justify-between px-5 pt-14'>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiSliderAlt />
                                        <span className='text-sm sm:text-base'>Filter</span>
                                    </div>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiSortAlt2 />
                                        <span className='text-sm sm:text-base'>Sort</span>
                                    </div>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiLayer />
                                        <span className='text-sm sm:text-base'>Compare</span>
                                    </div>
                                </div>
                                <Tab.Panels className="px-5 mt-2">
                                    {Object.values(categories).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                            )}
                                        >
                                            <ul>
                                                {posts.map((post) => (
                                                    <div key={post.id} className='p-5 my-4 bg-white rounded-xl font-poppins'>
                                                        <div className='flex items-center'>
                                                            <img src={post.image} alt="" className='object-contain border-2 border-gray-100 w-14 h-14 rounded-2xl' />
                                                            <div className='flex flex-col h-full pl-5'>
                                                                <div className='inline-flex space-x-5 text-xs font-semibold'>
                                                                    <div className='flex items-center text-[#ffe33a]'>{post.icon} <span className='text-gray-300'>4.5</span></div>
                                                                    <span className='text-gray-300'>{post.market}</span>
                                                                    <span className='text-gray-300'>{post.income}</span>
                                                                </div>
                                                                <h1 className='w-full text-lg font-semibold'>{post.title}</h1>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center justify-between pt-5 text-center'>
                                                            <div className='space-y-1'>
                                                                <p className='text-xs text-gray-400'>Min Purchase</p>
                                                                <p className='font-semibold'>{post.purchase}</p>
                                                            </div>
                                                            <div className='space-y-1'>
                                                                <p className='text-xs text-gray-400'>Price</p>
                                                                <p className='font-semibold'>{post.price}</p>
                                                            </div>
                                                            <div className='space-y-1'>
                                                                <p className='text-xs text-gray-400'>Exp Return 1Y</p>
                                                                <p className='font-semibold text-green-500'>{post.return}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>

                    case "transactions":
                        return <div className="w-full max-w-full py-16">
                            <Tab.Group>
                                <Tab.List className="fixed flex w-full space-x-1 bg-white sm:max-w-xl">
                                    {Object.keys(categories).map((category) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-sm font-medium leading-5 text-gray-400 outline-none',
                                                    selected
                                                        ? 'text-prs-primary border-b-2 bottom-0 border-prs-primary'
                                                        : 'text-blue-100 '
                                                )
                                            }
                                        >
                                            {category}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <div className='flex items-center justify-between px-5 pt-14'>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiSliderAlt />
                                        <span className='text-sm sm:text-base'>Filter</span>
                                    </div>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiSortAlt2 />
                                        <span className='text-sm sm:text-base'>Sort</span>
                                    </div>
                                    <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                                        <BiLayer />
                                        <span className='text-sm sm:text-base'>Compare</span>
                                    </div>
                                </div>
                                <Tab.Panels className="py-5">
                                    {Object.values(categories).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                            )}
                                        >
                                            <ul>
                                                {posts.map((post) => (
                                                    <section key={post.id} className="flex-1 pt-2 px-5">
                                                        <div className="w-full h-full sm:max-w-xl mx-auto p-6 bg-white rounded-2xl">
                                                            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-3">
                                                                <div className="flex items-center space-x-3">
                                                                    <BiDownArrowAlt className="text-4xl text-white bg-prs-primary p-2 rounded-full" />
                                                                    <div className="">
                                                                        <h1 className="text-base font-semibold">Subscription</h1>
                                                                        <p className="text-xs text-slate-300">5/3/2023 10:30 AM</p>
                                                                    </div>
                                                                </div>
                                                                <div className='bg-blue-200 px-3 text-sm py-1 font-semibold rounded-2xl text-blue-500'>
                                                                    <span>Submitted</span>
                                                                </div>
                                                            </div>
                                                            <h1 className='font-semibold text-lg pt-3'>{post.title}</h1>
                                                            <p className='text-base font-semibold text-gray-400'>Create New Investment Account No:</p>
                                                            <div className='flex items-center justify-between pt-5 text-center'>
                                                                <div className='space-y-1'>
                                                                    <p className='text-xs text-gray-400'>Amount (IDR)</p>
                                                                    <p className='font-semibold'>{post.purchase}</p>
                                                                </div>
                                                                <div className='space-y-1'>
                                                                    <p className='text-xs text-gray-400'>Price (IDR)</p>
                                                                    <p className='font-semibold'>-</p>
                                                                </div>
                                                                <div className='space-y-1'>
                                                                    <p className='text-xs text-gray-400'>Total (Unit)</p>
                                                                    <p className='font-semibold text-green-500'>-</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                ))}
                                            </ul>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>

                    default:
                        break;
                }
            })()}
        </>
    )
}

TabFilter.propTypes = {
    as: PropTypes.string
}

export default TabFilter;