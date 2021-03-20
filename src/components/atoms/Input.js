import { useState } from 'react'
import PropTypes from 'prop-types'

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

const InputText = ({ type, value, placeholder }) => {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = event => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input 
                className={`${classes.join(' ')}`} 
                type={type} 
                name="" 
                id=""
                value={inputValue}
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}

const InputEmail = ({ type, value, placeholder }) => {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = event => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input 
                className={`${classes.join(' ')}`} 
                type={type} 
                name="" 
                id="" 
                value={inputValue}
                placeholder={placeholder} 
                onChange={handleChange} />
        </div>
    )
}

const Input = props => {

    switch (props.variant.toLowerCase()) {
        case 'email':
            return <InputEmail {...props} />;
        default:
            return <InputText {...props} />;
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string
}

export default Input
