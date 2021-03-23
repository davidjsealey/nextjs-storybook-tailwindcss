import PropTypes from 'prop-types'
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

const HeaderCounter = () => (
    <header className={`${classes.join(' ')}`}>
        <Back />
        <Logo />
        <Counter currentCount={0} maxCount={10} variant={'inactive'} />
    </header>
)

const Header = ({ variant }) => {

    switch (variant.toLowerCase()) {
        case 'survey':
            return <HeaderSurvey />
            break;
        case 'counter':
            return <HeaderCounter />
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
