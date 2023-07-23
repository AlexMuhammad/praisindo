import { BiChevronRight, BiUserCircle } from "react-icons/bi"
import Toggle from "../components/atoms/Toggle"
import MainLayout from "../components/templates/MainLayout"

const Account = () => {
    return (
        <MainLayout as="profile">
            <section className="pt-16">
                <div className="w-full h-full sm:max-w-xl mx-auto px-4">
                    <div className="flex items-center justify-center h-52">
                        <BiUserCircle className="text-9xl" />
                    </div>
                </div>
            </section>
            <section className="flex-1 py-4">
                <div className="flex justify-between items-center w-full h-full sm:max-w-xl mx-auto pb-5 px-5">
                    <p className="font-bold text-sm">General</p>
                </div>
                <div className="w-full h-full sm:max-w-xl bg-gray-200 mx-auto px-5">
                    <div className="w-full h-full bg-white rounded-2xl">
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Account Setting</h3>
                                    </div>
                                </div>
                                <BiChevronRight className="text-3xl text-slate-400" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Risk Profile Level</h3>
                                    </div>
                                </div>
                                <BiChevronRight className="text-3xl text-slate-400" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Investment Account No.</h3>
                                    </div>
                                </div>
                                <BiChevronRight className="text-3xl text-slate-400" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Referral ID</h3>
                                    </div>
                                </div>
                                <BiChevronRight className="text-3xl text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 py-4">
                <div className="flex justify-between items-center w-full h-full sm:max-w-xl mx-auto pb-5 px-5">
                    <p className="font-bold text-sm">Customize App</p>
                </div>
                <div className="w-full h-full sm:max-w-xl bg-gray-200 mx-auto px-5">
                    <div className="w-full h-full bg-white rounded-2xl">
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Advance Settings</h3>
                                    </div>
                                </div>
                                <BiChevronRight className="text-3xl text-slate-400" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Dark Mode</h3>
                                    </div>
                                </div>
                                <Toggle />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Sign In with PIN Code</h3>
                                    </div>
                                </div>
                                <Toggle />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex w-full items-center justify-between p-4 border-b border-gray-400">
                                <div className="flex items-center">
                                    <div className="px-5">
                                        <h3 className="font-semibold text-base">Sign In with Finger Print</h3>
                                    </div>
                                </div>
                                <Toggle />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>

    )
}

export default Account