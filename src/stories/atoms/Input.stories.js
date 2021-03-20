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

export const Text = args => <Input variant='text' {...args} />
export const Email = args => <Input variant='email' {...args} />

Text.args = {
    type: 'text', 
    value: 'Joan Smith',
    placeholder: "Enter Text"
}

Email.args = {
    type: 'email',
    value: 'test@test.com', 
    placeholder: "Enter Email Address"
}
