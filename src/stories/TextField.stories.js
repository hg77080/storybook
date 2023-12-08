import TextField from "../components/TextField/TextField"

export default {
  title: "Components/TextField",
  component: TextField,
}

const Template = args => <TextField {...args} />

export const Basic = Template.bind({})
Basic.args = { label: "Name",isDisabled:false,isRequired:false };
export const Disabled = Template.bind({})
Disabled.args = { label: "Name",isDisabled:true,isRequired:false };