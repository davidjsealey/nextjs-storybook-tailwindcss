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

export const text = Template.bind({});
text.args = {type: 'text', placeholder: "Name"};

export const email = Template.bind({});
email.args = {type: 'email', placeholder: "Email"};
