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
export const Counter = args => <Header variant='counter' {...args} />;

Counter.args = { 
    currentCount: 1,
    maxCount: 10,
};

const baseArgTypes = {
    variant: {
        table: {
          disable: true
        }
    },
}

Counter.argTypes = {
    ...baseArgTypes
}
