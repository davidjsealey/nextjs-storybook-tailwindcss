import Counter from '../../components/atoms/Counter';

export default {
    title: 'Atoms/Counter',
    component: Counter,
}

export const Active = args => <Counter variant="active" {...args} />;
export const Inactive = args => <Counter variant="inactive" {...args} />;

Active.args = { 
    currentCount: 1,
    maxCount: 10,
};

Inactive.args = {
    maxCount: Active.args.maxCount,
};

const baseArgTypes = {
    variant: {
        table: {
          disable: true
        }
    },
}

Active.argTypes = {
    ...baseArgTypes
}

Inactive.argTypes = {
    ...baseArgTypes
}
