import { BiHomeAlt, BiLeaf, BiTransfer, BiPieChartAlt, BiPlus } from "react-icons/bi";
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom";

const Navbar = ({ as }) => {
    return (
        <>
            {(() => {
                switch (as) {
                    case "home":
                        return <nav className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto bg-white shadow-sm sm:max-w-xl">
                                <Link to={"/"}>
                                    <div className="flex flex-col items-center justify-center h-full border-t-2 cursor-pointer border-prs-primary text-prs-primary">
                                        <BiHomeAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Home</p>
                                    </div>
                                </Link>
                                <Link to={"/product"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiLeaf className="text-3xl" />
                                        <p className="text-xs font-semibold">Products</p>
                                    </div>
                                </Link>
                                <div className="p-3 rounded-full cursor-pointer bg-prs-primary">
                                    <BiPlus className="text-3xl text-white" />
                                </div>
                                <Link to={"/transaction"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiTransfer className="text-3xl" />
                                        <p className="text-xs font-semibold">Transaction</p>
                                    </div>
                                </Link>
                                <Link to={"/portfolio"}>
                                    <div className="flex flex-col items-center justify-center h-full text-gray-300 cursor-pointer">
                                        <BiPieChartAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Portfolio</p>
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    case "products":
                        return <nav className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto bg-white shadow-sm sm:max-w-xl">
                                <Link to={"/"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiHomeAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Home</p>
                                    </div>
                                </Link>
                                <Link to={"/product"}>
                                    <div className="flex flex-col items-center justify-center h-full border-t-2 cursor-pointer border-prs-primary text-prs-primary">
                                        <BiLeaf className="text-3xl" />
                                        <p className="text-xs font-semibold">Products</p>
                                    </div>
                                </Link>
                                <div className="p-3 rounded-full cursor-pointer bg-prs-primary">
                                    <BiPlus className="text-3xl text-white" />
                                </div>
                                <Link to={"/transaction"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiTransfer className="text-3xl" />
                                        <p className="text-xs font-semibold">Transaction</p>
                                    </div>
                                </Link>
                                <Link to={"/portfolio"}>
                                    <div className="flex flex-col items-center justify-center h-full text-gray-300 cursor-pointer">
                                        <BiPieChartAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Portfolio</p>
                                    </div>
                                </Link>
                            </div>
                        </nav>

                    case "transactions":
                        return <nav className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto bg-white shadow-sm sm:max-w-xl">
                                <Link to={"/"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiHomeAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Home</p>
                                    </div>
                                </Link>
                                <Link to={"/product"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiLeaf className="text-3xl" />
                                        <p className="text-xs font-semibold">Products</p>
                                    </div>
                                </Link>
                                <div className="p-3 rounded-full cursor-pointer bg-prs-primary">
                                    <BiPlus className="text-3xl text-white" />
                                </div>
                                <Link to={"/transaction"}>
                                    <div className="flex flex-col items-center justify-center h-full border-t-2 cursor-pointer border-prs-primary text-prs-primary">
                                        <BiTransfer className="text-3xl" />
                                        <p className="text-xs font-semibold">Transaction</p>
                                    </div>
                                </Link>
                                <Link to={"/portfolio"}>
                                    <div className="flex flex-col items-center justify-center h-full text-gray-300 cursor-pointer">
                                        <BiPieChartAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Portfolio</p>
                                    </div>
                                </Link>
                            </div>
                        </nav>

                    case "portfolio":
                        return <nav className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto bg-white shadow-sm sm:max-w-xl">
                                <Link to={"/"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiHomeAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Home</p>
                                    </div>
                                </Link>
                                <Link to={"/product"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiLeaf className="text-3xl" />
                                        <p className="text-xs font-semibold">Products</p>
                                    </div>
                                </Link>
                                <div className="p-3 rounded-full cursor-pointer bg-prs-primary">
                                    <BiPlus className="text-3xl text-white" />
                                </div>
                                <Link to={"/transaction"}>
                                    <div className="flex flex-col items-center justify-center text-gray-300 cursor-pointer">
                                        <BiTransfer className="text-3xl" />
                                        <p className="text-xs font-semibold">Transaction</p>
                                    </div>
                                </Link>
                                <Link to={"/portfolio"}>
                                    <div className="flex flex-col items-center justify-center h-full border-t-2 cursor-pointer border-prs-primary text-prs-primary">
                                        <BiPieChartAlt className="text-3xl" />
                                        <p className="text-xs font-semibold">Portfolio</p>
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    default:
                        break;
                }
            })()}
        </>
    )
}

Navbar.propTypes = {
    as: PropTypes.string
}

export default Navbar