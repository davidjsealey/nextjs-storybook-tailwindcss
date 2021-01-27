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

export const Text = Template.bind({});
Text.args = {type: 'text', placeholder: "Name"};

export const Emal = Template.bind({});
Emal.args = {type: 'email', placeholder: "Email"};
