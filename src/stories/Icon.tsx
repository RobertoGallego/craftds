import { type SVGProps } from "react"
import { icons, type IconName } from "./icons"

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName
  size?: number
  color?: string
}

export const Icon = ({
  name,
  size = 16,
  color = "currentColor",
  style,
  ...props
}: IconProps) => {
  const Svg = icons[name]

  return (
    !!Svg && (
      <Svg
        width={size}
        height={size}
        style={{ color, ...style }}
        {...props}
      />
    )
  )
}
