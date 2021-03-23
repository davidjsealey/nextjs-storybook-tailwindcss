import Button from '../../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
}

export const Primary = args => <Button variant='primary' {...args} />;
export const Secondary = args => <Button variant='secondary' {...args} />;

const baseArgs = {
  href: 'https://www.example.com',
  disabled: false
}

Primary.args = {
  label: 'Click Here',
  ...baseArgs
}

Secondary.args = {
  label: 'Complete',
  ...baseArgs
}
