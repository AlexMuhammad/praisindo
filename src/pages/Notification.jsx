import { BiChevronRight, BiDownArrowAlt } from "react-icons/bi"
import MainLayout from "../components/templates/MainLayout"

const Notification = () => {
    return (
        <MainLayout as="notification">
            <div className="pt-16">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                    <section key={i} className="flex-1">
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
                ))}
            </div>
        </MainLayout>
    )
}

export default Notification