import Input from '../../components/atoms/Input'

export default {
    title: 'Atoms/Input',
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

export const Email = Template.bind({});
Email.args = {type: 'email', placeholder: "Email"};
