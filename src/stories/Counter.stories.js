import Counter from '../components/atoms/Counter';

export default {
    title: 'Components/Atoms/Counter',
    component: Counter,
}

const Template = args => <Counter {...args} />;

export const Active = Template.bind({});
Active.args = { 
    currentCount: 1,
    maxCount: 10
};

Active.argTypes = {
    currentCount: {
        control: { 
            type: 'number', 
            min: Active.args.currentCount, 
            max: Active.args.maxCount
        },
    }
}

export const Inactive = () => <Counter currentCount={0} maxCount={Active.args.maxCount} />;