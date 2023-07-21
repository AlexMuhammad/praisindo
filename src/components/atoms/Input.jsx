import { PropTypes } from 'prop-types';

const Input = ({ placeholder, handleChange, error, name }) => {
    return (
        <>
            <input type="text" name={name} id="" className="border-b-2 border-prs-secondary w-full pb-1 outline-none text-sm" placeholder={placeholder} onChange={handleChange} />
            <p className='text-red-500 text-xs italic'>{!error ? null : "Format Email Tidak Sesuai"}</p>
        </>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    handleChange: PropTypes.func,
    name: PropTypes.string
}

export default Input