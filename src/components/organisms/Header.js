import PropTypes from 'prop-types'
import ProgressBar from '../atoms/ProgressBar'
import Back from '../atoms/Back'
import Logo from '../atoms/Logo'
import Counter from '../atoms/Counter'

const classes = [
    'flex',
    'items-center'
];

const HeaderDefault = () => (
    <header className={`${classes.join(' ')}`}>
        <Logo />
    </header>
)

const HeaderSurvey = () => (
    <header className={`${classes.join(' ')}`}>
        <Back />
        <Logo />
    </header>
)

const HeaderCounter = ({ currentCount, maxCount }) => (
    <header className={`${classes.join(' ')}`}>
        <ProgressBar currentCount={currentCount} maxCount={maxCount} />
        <div>
            <Back />
            <Logo />
            <Counter currentCount={currentCount} maxCount={maxCount} variant={'inactive'} />
        </div>
    </header>
)

const Header = ({ variant, currentCount, maxCount }) => {

    switch (variant.toLowerCase()) {
        case 'survey':
            return <HeaderSurvey />
            break;
        case 'counter':
            return <HeaderCounter currentCount={currentCount} maxCount={maxCount} />
            break;
        default:
            return <HeaderDefault />
            break;
    }
}

Header.propTypes = {
    variant: PropTypes.oneOf['default', 'counter', 'survey']
}

export default Header;
