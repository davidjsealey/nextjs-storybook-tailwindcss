const Counter = ({ currentCount, maxCount }) => {
    let leadingZero = currentCount > 0 && currentCount < 10 ? '0' + currentCount : currentCount;

    return (
        <div>
            {leadingZero}/{maxCount}
        </div>
    )
}

export default Counter
