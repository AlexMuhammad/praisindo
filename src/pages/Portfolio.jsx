import { AiFillCaretUp } from "react-icons/ai"
import MainLayout from "../components/templates/MainLayout"
import { BiSliderAlt, BiSortAlt2 } from "react-icons/bi"
import { PORTFOLIO } from "../lib/utils"
import { AiFillWarning } from "react-icons/ai"

const Portfolio = () => {
    return (
        <MainLayout as="portfolio">
            <section className="fixed z-50 flex items-center justify-center w-full h-16 pt-32">
                <div className="w-full px-4 py-5 mx-auto bg-white sm:max-w-xl">
                    <p className="text-sm">Total Balance</p>
                    <h3 className="text-4xl font-semibold">IDR 1,315,800,662.31</h3>
                    <div className="flex items-center pt-3 space-x-3">
                        <AiFillCaretUp className="text-green-500" />
                        <p className="inline text-xs font-medium text-green-600">IDR 243,489,330,00 (+14.37%)</p>
                    </div>
                </div>
            </section>
            <section className="pt-32">
                <div className="w-full h-full px-5 sm:max-w-xl mx-auto rounded-2xl py-5">
                    <div className='flex items-center space-x-5 pt-14'>
                        <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                            <BiSliderAlt />
                            <span className='text-sm sm:text-base'>Filter</span>
                        </div>
                        <div className='flex items-center px-5 py-2 space-x-2 font-semibold text-gray-400 bg-white shadow-md rounded-2xl'>
                            <BiSortAlt2 />
                            <span className='text-sm sm:text-base'>Sort</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 w-full px-5 pb-14 sm:max-w-xl mx-auto">
                {PORTFOLIO.map((portof, i) => (
                    <div key={i} className="w-full h-full sm:max-w-xl mx-auto p-6 bg-white rounded-2xl mb-5">
                        <div className="flex items-center justify-between border-b-2 border-gray-100 pb-3">
                            <div className="flex items-center space-x-3">
                                <img src={portof.image} alt="" className="object-contain border-2 border-gray-100 w-14 h-14 rounded-2xl" />
                                <div className="">
                                    <h1 className="text-base font-semibold">{portof.title}</h1>
                                    <p className="text-sm font-semibold text-slate-300">{portof.target}</p>
                                </div>
                            </div>
                            <div className='bg-amber-100 px-3 text-sm py-1 font-semibold rounded-2xl text-amber-500'>
                                <span>{portof.status}</span>
                            </div>
                        </div>
                        <h1 className='font-semibold text-sm pt-3 text-gray-400'>Current Balance</h1>
                        <p className='text-base font-semibold'>IDR {portof.balance}</p>
                        <div className="flex justify-between">
                            <div>
                                <h1 className='font-semibold text-sm pt-3 text-gray-400'>Earnings</h1>
                                <p className='text-base font-semibold text-green-600'>IDR {portof.earning}</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-sm pt-3 text-gray-400'>Return</h1>
                                <p className='text-base font-semibold text-green-600'>{portof.return}%</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-gray-100  rounded-full w-1/2 space-x-2 mt-5">
                            <AiFillWarning className="text-white bg-red-600 text-3xl p-1 rounded-full" />
                            <span className="font-semibold text-gray-400">Need Optimization</span>
                        </div>
                    </div>
                ))}
            </section>
        </MainLayout>
    )
}

export default Portfolio