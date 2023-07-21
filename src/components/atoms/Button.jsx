import { PropTypes } from "prop-types"

const Button = ({ children, type, error }) => {
    return (
        <button className={`bg-prs-primary text-center py-3 rounded-xl text-white font-semibold  ${error ? "opacity-30" : ""} rounded-3xl`} type={type} disabled={error ? true : false}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.boolean,
}

export default Button