// import Button from "../components/Button"
import { MyFirstComponent as Button} from '@hg77080/newcomponent.my-first-component';
const variants = ['primary', 'secondary'];
const sizeVariants = ['sm', 'md','lg'];

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: variants },
    size: { control: "radio", options: sizeVariants },

  },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  buttonText: "Submit",
  size: "md",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  buttonText: "Submit",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
    variant: "primary",
    buttonText: "Submit",
    size: "sm",
}

export const Large = Template.bind({})
Large.args = {
    variant: "primary",
    buttonText: "Submit",
    size: "lg",
}
