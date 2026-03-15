import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"

import { Text } from "./Text"

const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary Text",
    size: "3",
    weight: "regular",
    color: "black",
    align: "left",
    wrap: "wrap",
    truncate: false,
    as: "span",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = canvas.getByText("Primary Text")
    await expect(text).toBeInTheDocument()
    await expect(text).toBeVisible()
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary Text",
    size: "2",
    weight: "light",
    color: "gray",
    align: "center",
    wrap: "nowrap",
    truncate: true,
    as: "p",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = canvas.getByText("Secondary Text")
    await expect(text).toBeInTheDocument()
    await expect(text).toBeVisible()
    await expect(text.tagName).toBe("P")
  },
}

export const Large: Story = {
  args: {
    children: "Large Text",
    size: "4",
    weight: "bold",
    color: "red",
    align: "right",
    wrap: "wrap",
    truncate: false,
    as: "div",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const text = canvas.getByText("Large Text")
    await expect(text).toBeInTheDocument()
    await expect(text).toBeVisible()
    await expect(text.tagName).toBe("DIV")
  },
}
