import MainLayout from "../components/templates/MainLayout"

import { AiFillCaretUp, AiOutlineRise } from "react-icons/ai"

const Home = () => {
    return (
        <MainLayout>
            <section className="flex flex-col flex-1 pt-16">
                <div className="w-full px-4 h-64 sm:max-w-xl mx-auto bg-prs-primary pt-5">
                    <p className="text-white text-sm">Total Balance</p>
                    <h3 className="text-xl font-semibold text-white">IDR 1,315,800,662.31</h3>
                    <div className="flex items-center space-x-3 pt-3">
                        <AiFillCaretUp className="text-green-500" />
                        <p className="inline text-white text-xs font-medium">IDR 243,489,330,00 (+14.37%)</p>
                    </div>
                </div>
                <div className="w-11/12 px-5 h-64 sm:max-w-lg mx-auto -mt-32 bg-red-400 rounded-2xl">
                    <div className="grid grid-cols-4 place-items-center items-center h-full">
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                        <h1>tess</h1>
                    </div>
                </div>
            </section>
            <section className="flex-1 pt-8">
                <div className="w-full px-4 h-full sm:max-w-xl mx-auto">
                    <h1 className="font-bold text-xl">Top 5 List</h1>
                    <div className="flex gap-3 pt-5">
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
                <div className="w-full h-full sm:max-w-xl mx-auto bg-white rounded-2xl">
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
            </section>
        </MainLayout>
    )
}

export default Home