import { Input } from "@hg77080/inputcomponent.input"

export default {
  title: "Components/Input",
  component: Input,
}

const Template = args => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = { label: "Name",isDisabled:false,isRequired:false,error:'' };
export const Disabled = Template.bind({})
Disabled.args = { label: "Name",isDisabled:true,isRequired:false,error:'' };