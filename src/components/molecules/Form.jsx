import Button from "../atoms/Button"
import Input from "../atoms/Input"

import { PropTypes } from "prop-types"

const Form = ({ handleChange, handleSubmit, error, email, password }) => {

    return (
        <div className="w-full h-full">
            <form className="flex flex-col justify-between h-full py-5" onSubmit={handleSubmit}>
                <div className="bg-white p-5 rounded-xl">
                    <label htmlFor="email" className="text-xs text-gray-400">E-mail</label>
                    <Input placeholder="Your e-mail" handleChange={handleChange} error={error} email={email} name="email" />
                    <label htmlFor="email" className="text-xs text-gray-400">Password</label>
                    <Input placeholder="Your password" handleChange={handleChange} password={password} error={error} name="password" />
                </div>
                <Button type="submit" error={error}>Log in</Button>
            </form>
        </div>
    )
}

Form.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    error: PropTypes.boolean,
    password: PropTypes.object,
    email: PropTypes.object
}

export default Form