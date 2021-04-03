import ProgressBar from '../../components/atoms/ProgressBar'

export default {
    title: 'Atoms/ProgressBar',
    component: ProgressBar,
}

export const Default = args => <ProgressBar {...args} />

Default.args = { 
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

Default.argTypes = {
    ...baseArgTypes
}