import Back from '../atoms/Back';
import Logo from '../atoms/Logo';
import Counter from '../atoms/Counter';

const Header = () => {

    return (
        <header className={'flex items-center'}>
            <Back />
            <Logo />
            <Counter currentCount={0} maxCount={10} variant={'inactive'} />
        </header>
    )
}

export default Header;
