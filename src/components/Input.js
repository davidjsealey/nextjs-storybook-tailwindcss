const Input = ({ type, placeholder }) => {
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

    return (
        <div>
            <input 
                className={`${classes.join(' ')}`} 
                type={type} 
                name="" 
                id="" 
                placeholder={placeholder} />
        </div>
    )
}

export default Input
