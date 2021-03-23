import Header from '../../components/organisms/Header';

export default {
    title: 'Organisms/Header',
    component: Header,
    argTypes: {
        variant: {
            table: {
              disable: true
            }
        }
    }
}

export const Default = () => <Header variant='default' />;
export const Survey = () => <Header variant='survey' />;
export const Counter = () => <Header variant='counter' />;
