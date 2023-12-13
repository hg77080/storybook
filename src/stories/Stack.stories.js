// import Stack from "../components/Stack/Stack"
import {Stack} from "@hg77080/stackcomponent.stack"
export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  numberOfChildren: 1,
  spacing: 2,
  wrap: false,
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  numberOfChildren: 1,
  spacing: 2,
  wrap: false,
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: "row",
  numberOfChildren: 1,
  spacing: 0,
  wrap: false,
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
}