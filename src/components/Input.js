const Input = ({ type }) => {
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
                placeholder="Enter text" />
        </div>
    )
}

export default Input
