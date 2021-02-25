import PropTypes from 'prop-types'

const classes = [
    'inline-flex',
    'rounded-full',
    'border-blue-500', 
    'bg-blue-500', 
    'mr-2',
    'px-4', 
    'py-2',
    'text-white',
    'text-sm',
    'text-center'
];

const CounterActive = ({ currentCount, maxCount }) => {

    let leadingZero = currentCount > 0 && currentCount < 10 ? '0' + currentCount : currentCount;

    return (
        <div className={`${classes.join(' ')}`}>
            {leadingZero}/{maxCount}
        </div>
    )
}

const CounterInactive = ({ maxCount }) => {

    return (
        <div className={`opacity-20 ${classes.join(' ')}`}>
            0/{maxCount}
        </div>
    )
}

const Counter = props => {
    switch (props.variant.toLowerCase()) {
        case 'inactive':
            return <CounterInactive {...props} />;
        case 'active':
        default:
            return <CounterActive {...props} />;
    }
}

CounterActive.propTypes = {
    currentCount: PropTypes.number.isRequired,
    maxCount: PropTypes.number.isRequired,
}

CounterInactive.propTypes = {
    maxCount: PropTypes.number.isRequired,
}

Counter.propTypes = {
    variant: PropTypes.oneOf(['inactive', 'active'])
}

export default Counter
