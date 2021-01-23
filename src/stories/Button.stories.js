import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { href: "https://www.example.com", styles: 'bg-blue-500 text-white', label: "Click Me"};

export const Active = Template.bind({});
Active.args = { ...Primary.args, styles: "bg-white text-blue-500" };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, styles: "bg-blue-500 text-white opacity-20 pointer-events-none", disabled: 'disabled' };