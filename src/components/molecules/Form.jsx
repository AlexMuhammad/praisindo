/* eslint-disable react/prop-types */
import { Form, Formik } from "formik"
// import Button from "../atoms/Button"
import Input from "../atoms/Input"

// import { PropTypes } from "prop-types"
import { LoginSchema } from "../../lib/validation"
import { useNavigate } from "react-router-dom"
import { setToken } from "../../lib/helper"

const FormLogin = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        setToken()
        navigate("/")
    }
    return (
        <div className="w-full h-full">
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    handleLogin(values)
                    resetForm()
                }}
                validationSchema={LoginSchema}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                    } = props
                    return (
                        <Form className="flex flex-col justify-between h-full py-5">
                            <div className="bg-white p-5 rounded-xl">
                                <label htmlFor="email" className="text-xs text-gray-400">E-mail</label>
                                <Input
                                    name="email"
                                    type="text"
                                    placeholder="Your e-mail"
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                                <label htmlFor="email" className="text-xs text-gray-400">Password</label>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Your password"
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                            </div>
                            <button className="bg-prs-primary text-center py-3 rounded-xl text-white font-semibold">Login</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

// Form.propTypes = {
//     handleChange: PropTypes.func,
//     handleSubmit: PropTypes.func,
//     error: PropTypes.boolean,
//     password: PropTypes.object,
//     email: PropTypes.object
// }

export default FormLogin