import { PropTypes } from "prop-types"
import Navbar from "../organisms/Navbar"
import Header from "../organisms/Header"

const MainLayout = ({ children }) => {
    return (
        <main className="flex flex-col min-h-screen bg-gray-200">
            <Header />
            {children}
            <Navbar />
        </main>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node
}

export default MainLayout