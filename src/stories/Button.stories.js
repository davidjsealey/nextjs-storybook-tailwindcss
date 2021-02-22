import Button from '../components/atoms/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    styles: {
      table: {
        disable: true
      }
    }
  }
}

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { href: "https://www.example.com", styles: 'bg-white border-blue-500 w-full text-blue-500', label: "Click Me", disabled: false};

export const Active = Template.bind({});
Active.args = { ...Primary.args, styles: "bg-blue-500 border-blue-500 w-full text-white" };

export const Action = Template.bind({});
Action.args = { ...Primary.args, styles: "border-black bg-black text-white uppercase", label: "Complete" };
