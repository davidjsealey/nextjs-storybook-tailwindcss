import Input from '../components/Input'

export default {
    title: 'Components/Forms/Input',
    component: Input,
    argTypes: {
        type: {
            table: {
                disable: true
            }
        }
    }
}

const Template = args => <Input {...args} />;

export const textInput = Template.bind({});
textInput.args = {type: 'text'};

export const emailInput = Template.bind({});
emailInput.args = {type: 'email'};
