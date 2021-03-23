import PropTypes from 'prop-types'
import { useState } from 'react'

const classes = [
    'border',
    'border-gray-100',
    'rounded-sm',
    'bg-gray-100',
    'px-4',
    'py-2',
    'w-full',
    'text-gray-500'
];

const Input = ({
    type = 'text',
    value,
    placeholder
}) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = event => {
        setInputValue(event.target.value);
    }

    return (
        <input
            className={`${classes.join(' ')}`} 
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string
}

export default Input
