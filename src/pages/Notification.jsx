import { BiChevronLeft, BiBellOff, BiDownArrowAlt, BiChevronRight } from "react-icons/bi"

const Notification = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200 font-poppins">
            <header className="fixed flex items-center justify-center w-full h-16 z-50">
                <div className="w-full sm:max-w-xl mx-auto flex justify-between items-center h-full px-4 space-x-5 bg-white">
                    <BiChevronLeft className="text-3xl text-prs-primary" />
                    <span className="text-xl font-bold">Notifications</span>
                    <BiBellOff className="text-3xl text-prs-primary" />
                </div>
            </header>
            <section className="flex-1 pt-16">
                <div className="w-full h-full sm:max-w-xl mx-auto px-4 bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <BiDownArrowAlt className="text-4xl text-white bg-prs-primary p-2 rounded-full" />
                            <div className="space-y-2">
                                <h1 className="text-lg font-semibold">Payment Received</h1>
                                <p className="text-sm text-slate-400">Jhon sent you $50</p>
                                <p className="text-xs text-slate-300">5/3/2023 10:30 AM</p>
                            </div>
                        </div>
                        <BiChevronRight className="text-3xl text-slate-400" />
                    </div>
                </div>
            </section>
            <section className="flex-1"></section>
        </div>
    )
}

export default Notification