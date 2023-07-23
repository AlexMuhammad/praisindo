import { PropTypes } from "prop-types"
import Navbar from "../organisms/Navbar"
import Header from "../organisms/Header"

const MainLayout = ({ children, as }) => {
    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <Header as={as} />
            {children}
            <Navbar as={as} />
        </main>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
    as: PropTypes.string
}

export default MainLayout