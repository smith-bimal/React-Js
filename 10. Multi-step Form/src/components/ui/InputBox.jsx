/* eslint-disable react/prop-types */
const InputBox = ({type, placeholder, value, onChange }) => {

    return (
        <input
            type={type}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputBox