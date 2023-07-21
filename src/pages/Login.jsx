/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "../components/molecules/Form"
import { emailValidate, passwordValidate } from "../lib/helper";

const Login = () => {
    const [value, setValue] = useState({
        email: null,
        password: null
    });
    const [error, setError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email" && !emailValidate.test(value)) {
            setError(true)
        } else if (name === "password" && !passwordValidate.test(value)) {
            setError(true);
        } else {
            setError(false)
        }
        setValue({
            ...value,
            [name]: value
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="flex flex-col w-full h-screen font-poppinss">
            <div className="sm:max-w-xl w-full flex flex-col h-full bg-prs-secondary px-4 mx-auto pt-20">
                <h1 className="text-center font-bold text-3xl mb-2">Log in</h1>
                <h3 className="text-center font-bold">Fill the form to log in</h3>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} error={error} />
            </div>
        </div>
    )
}

export default Login