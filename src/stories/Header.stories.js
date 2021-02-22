import Header from '../components/organisms/Header';
import Logo from '../components/atoms/Logo';

export default {
    title: 'Components/Organisms/Header',
    component: Header
}

export const Initial = () => {

    return (
        <Header>
            <Logo />
        </Header>
    )
}
