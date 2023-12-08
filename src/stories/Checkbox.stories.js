import Checkbox from "../components/Checkbox/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: { onChange: { action: "onChange" } },
}

const Template = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = { label: "Checkbox",checked:false};
// export const Disabled = Template.bind({})
// Disabled.args = { label: "Name",isDisabled:true,isRequired:false };