import PropTypes from 'prop-types'

const containerClasses = [
    'relative',
    'h-2',
];

const classes = [
    'absolute',
    'block',
    'bg-blue-500',
    'h-2',
    'left-0',
    'top-0',
];

const ProgressBar = ({currentCount, maxCount}) => {
    const progressWidth = (currentCount / maxCount) * 100;
    return (
        <div className={containerClasses.join(' ')}>
            <span className={classes.join(' ')} style={{width: progressWidth + '%'}}></span>
        </div>
    )
}

export default ProgressBar
