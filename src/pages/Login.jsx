import FormLogin from "../components/molecules/Form"

const Login = () => {

    return (
        <div className="flex flex-col w-full h-screen font-poppinss">
            <div className="sm:max-w-xl w-full flex flex-col h-full bg-prs-secondary px-4 mx-auto pt-20">
                <h1 className="text-center font-bold text-3xl mb-2">Log in</h1>
                <h3 className="text-center font-bold">Fill the form to log in</h3>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login