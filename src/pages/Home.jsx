import MainLayout from "../components/templates/MainLayout"

import { AiFillCaretUp, AiOutlineRise, AiFillInfoCircle } from "react-icons/ai";
import Tes from "../assets/images/valen.png"
import { useEffect } from "react";
import { getToken } from "../lib/helper";
import { useNavigate } from "react-router-dom";
import { MENUS } from "../lib/utils";

const Home = () => {
    const token = getToken();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }, [])

    return (
        <MainLayout as="home">
            <section className="flex flex-col flex-1 pt-16">
                <div className="w-full px-4 h-64 sm:max-w-xl mx-auto bg-prs-primary pt-5">
                    <p className="text-white text-sm">Total Balance</p>
                    <h3 className="text-4xl font-semibold text-white">IDR 1,315,800,662.31</h3>
                    <div className="flex items-center space-x-3 pt-3">
                        <AiFillCaretUp className="text-green-500" />
                        <p className="inline text-white text-xs font-medium">IDR 243,489,330,00 (+14.37%)</p>
                    </div>
                </div>
                <div className="w-full h-full sm:max-w-xl mx-auto px-5">
                    <div className="w-full px-5 h-64 sm:max-w-xl mx-auto -mt-32 bg-white drop-shadow rounded-2xl">
                        <div className="grid grid-cols-4 place-items-center items-center h-full">
                            {MENUS.map((menu, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <img src={menu.image} alt={menu.name} className="w-10" />
                                    <p className="text-center text-sm font-semibold text-gray-500">{menu.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 pt-8">
                <div className="w-full px-4 h-full sm:max-w-xl mx-auto">
                    <h1 className="font-bold text-xl">Top 5 List</h1>
                    <div className="flex gap-3 pt-5 w-full text-xs sm:text-base">
                        <div className="bg-prs-primary bg-opacity-10 py-3 px-5 rounded-3xl">
                            <p className="text-prs-primary font-bold">Model Portfolios</p>
                        </div>
                        <div className="bg-prs-primary bg-opacity-10 py-3 px-5 rounded-3xl">
                            <p className="text-prs-primary font-bold">Model Portfolios</p>
                        </div>
                        <div className="bg-prs-primary bg-opacity-10 py-3 px-5 rounded-3xl">
                            <p className="text-prs-primary font-bold">Model Portfolios</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 pt-8">
                <div className="w-full h-full sm:max-w-xl mx-auto px-5">
                    <div className="w-full h-full bg-white rounded-2xl">
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-7 border-b border-gray-400">
                                <div className="flex items-center">
                                    <AiOutlineRise className="text-3xl text-green-400" />
                                    <div className="px-5">
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                        <p>Investor</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-prs-success space-x-2 py-3 px-4 rounded-3xl">
                                    <AiFillCaretUp className="text-green-500" />
                                    <p className="text-sm font-semibold text-green-500 after:content-['1Y'] after:text-green-300">7.30% </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-7 border-b border-gray-400">
                                <div className="flex items-center">
                                    <AiOutlineRise className="text-3xl text-green-400" />
                                    <div className="px-5">
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                        <p>Investor</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-prs-success space-x-2 py-3 px-4 rounded-3xl">
                                    <AiFillCaretUp className="text-green-500" />
                                    <p className="text-sm font-semibold text-green-500 after:content-['1Y'] after:text-green-300">7.30% </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-7 border-b border-gray-400">
                                <div className="flex items-center">
                                    <AiOutlineRise className="text-3xl text-green-400" />
                                    <div className="px-5">
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                        <p>Investor</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-prs-success space-x-2 py-3 px-4 rounded-3xl">
                                    <AiFillCaretUp className="text-green-500" />
                                    <p className="text-sm font-semibold text-green-500 after:content-['1Y'] after:text-green-300">7.30% </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-7 border-b border-gray-400">
                                <div className="flex items-center">
                                    <AiOutlineRise className="text-3xl text-green-400" />
                                    <div className="px-5">
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                        <p>Investor</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-prs-success space-x-2 py-3 px-4 rounded-3xl">
                                    <AiFillCaretUp className="text-green-500" />
                                    <p className="text-sm font-semibold text-green-500 after:content-['1Y'] after:text-green-300">7.30% </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-7 border-b border-gray-400">
                                <div className="flex items-center">
                                    <AiOutlineRise className="text-3xl text-green-400" />
                                    <div className="px-5">
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                        <p>Investor</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-prs-success space-x-2 py-3 px-4 rounded-3xl">
                                    <AiFillCaretUp className="text-green-500" />
                                    <p className="text-sm font-semibold text-green-500 after:content-['1Y'] after:text-green-300">7.30% </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 py-8">
                <div className="flex justify-between items-center w-full h-full sm:max-w-xl mx-auto pb-5 px-5">
                    <p className="font-bold text-xl">Investment Tips</p>
                    <p className="text-sm font-bold text-prs-primary">See More</p>
                </div>
                <div className="w-full h-full sm:max-w-xl mx-auto px-5">
                    <div className="flex w-full h-full sm:max-w-xl mx-auto gap-5 overflow-x-scroll scroll-container">
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md p-3">
                                <div className="flex items-center">
                                    <div className="px-5 space-y-3">
                                        <AiFillInfoCircle className="text-3xl text-prs-primary text-start" />
                                        <h3 className="font-bold text-xl">Successful investing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md p-3">
                                <div className="flex items-center">
                                    <div className="px-5 space-y-3">
                                        <AiFillInfoCircle className="text-3xl text-prs-primary text-start" />
                                        <h3 className="font-bold text-xl">Choose a stable investment product</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md p-3">
                                <div className="flex items-center">
                                    <div className="px-5 space-y-3">
                                        <AiFillInfoCircle className="text-3xl text-prs-primary text-start" />
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md p-3">
                                <div className="flex items-center">
                                    <div className="px-5 space-y-3">
                                        <AiFillInfoCircle className="text-3xl text-prs-primary text-start" />
                                        <h3 className="font-bold text-xl">Model Aman Ketika Pandemi</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 pb-20">
                <div className="flex justify-between items-center w-full h-full sm:max-w-xl mx-auto pb-5 px-5">
                    <p className="font-bold text-xl">Latest News</p>
                    <p className="text-sm font-bold text-prs-primary">See More</p>
                </div>
                <div className="w-full h-full sm:max-w-xl mx-auto px-5">
                    <div className="flex w-full h-full sm:max-w-xl mx-auto gap-5 overflow-x-scroll scroll-container">
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md">
                                <div className="flex flex-col items-center w-full">
                                    <img src={Tes} alt="tes" className="w-full rounded-tr-2xl rounded-tl-2xl" />
                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-xl">Successful investing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md">
                                <div className="flex flex-col items-center w-full">
                                    <img src={Tes} alt="tes" className="w-full rounded-tr-2xl rounded-tl-2xl" />
                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-xl">Successful investing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-[178px] h-64 bg-white rounded-2xl shadow-md">
                                <div className="flex flex-col items-center w-full">
                                    <img src={Tes} alt="tes" className="w-full rounded-tr-2xl rounded-tl-2xl" />
                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-xl">Successful investing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default Home