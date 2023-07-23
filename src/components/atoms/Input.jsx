/* eslint-disable react/prop-types */

const Input = ({
    type,
    placeholder,
    name,
    value,
    handleChange,
    handleBlur,
    touched,
    errors,
}) => {
    return (
        <>
            <input type={type} name={name} className="border-b-2 border-prs-secondary w-full pb-1 outline-none text-sm" value={value} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} autoComplete="" />
            <p className='text-red-500 text-xs italic'>{touched && errors ? errors : null}</p>
        </>
    )
}

export default Input