import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect } from "storybook/test"
import { Icon } from "./Icon"

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const AllIcons: Story = {
  args: {
    name: "home",
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Icon name="home" size={16} />
      <Icon name="hospital" size={16} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const icons = canvasElement.querySelectorAll("svg")
    await expect(icons.length).toBe(2)
    icons.forEach(async (icon) => {
      await expect(icon).toBeInTheDocument()
      await expect(icon).toBeVisible()
    })
  },
}

export const DynamicHome: Story = {
  args: {
    name: "home",
    size: 16,
  },
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector("svg")
    await expect(icon).toBeInTheDocument()
    await expect(icon).toBeVisible()
  },
}

export const DynamicHospital: Story = {
  args: {
    name: "hospital",
    size: 16,
  },
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector("svg")
    await expect(icon).toBeInTheDocument()
    await expect(icon).toBeVisible()
  },
}
