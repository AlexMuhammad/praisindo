import { BiSearch, BiBell, BiStar, BiUserCircle, BiChevronLeft, BiPlus, BiBellOff } from "react-icons/bi"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

const Header = ({ as }) => {
    return (
        <>
            {(() => {
                switch (as) {
                    case "home":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-end w-full h-full px-4 mx-auto space-x-5 sm:max-w-xl bg-prs-primary">
                                <BiSearch className="text-3xl text-white" />
                                <BiStar className="text-3xl text-white" />
                                <Link to="/notification">
                                    <BiBell className="text-3xl text-white" />
                                </Link>
                                <Link to="/profile">
                                    <BiUserCircle className="text-3xl text-white" />
                                </Link>
                            </div>
                        </header>
                    case "profile":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-4 mx-auto space-x-5 bg-white sm:max-w-xl">
                                <Link to="/">
                                    <BiChevronLeft className="text-3xl text-prs-primary" />
                                </Link>
                                <span className="text-xl font-bold">Account</span>
                                <Link to="/notification">
                                    <BiBell className="text-3xl text-prs-primary" />
                                </Link>
                            </div>
                        </header>
                    case "products":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-4 mx-auto space-x-5 bg-white sm:max-w-xl">
                                <span></span>
                                <span className="text-xl font-bold">Products</span>
                                <BiSearch className="text-3xl text-prs-primary" />
                            </div>
                        </header>
                    case "transactions":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-4 mx-auto space-x-5 bg-white sm:max-w-xl">
                                <span></span>
                                <span className="text-xl font-bold">Transaction</span>
                                <BiSearch className="text-3xl text-prs-primary" />
                            </div>
                        </header>
                    case "portfolio":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto space-x-5 bg-white sm:max-w-xl">
                                <span className="text-xl font-bold">My Portfolio</span>
                                <div className="flex items-center space-x-3">
                                    <BiSearch className="text-3xl text-prs-primary" />
                                    <BiPlus className="text-3xl text-prs-primary" />
                                </div>
                            </div>
                        </header>
                    case "notification":
                        return <header className="fixed z-50 flex items-center justify-center w-full h-16">
                            <div className="flex items-center justify-between w-full h-full px-5 mx-auto space-x-5 bg-white sm:max-w-xl">
                                <Link to="/">
                                    <BiChevronLeft className="text-3xl text-prs-primary" />
                                </Link>
                                <span className="text-xl font-bold">Transaction</span>
                                <BiBellOff className="text-3xl text-prs-primary" />
                            </div>
                        </header>
                }
            })()}
        </>
    )
}

Header.propTypes = {
    as: PropTypes.string
}

export default Header