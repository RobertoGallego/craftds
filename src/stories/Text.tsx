import { type ReactNode } from "react"
import cn from "classnames"
import styles from "./Text.module.css"

interface TextProps {
  children: ReactNode
  size?: "1" | "2" | "3" | "4"
  weight?: "light" | "regular" | "bold"
  color?: "black" | "gray" | "red"
  align?: "left" | "center" | "right"
  wrap?: "wrap" | "nowrap"
  truncate?: boolean
  as?: "span" | "p" | "div"
}

export const Text = ({
  children,
  size = "3",
  weight = "regular",
  color = "black",
  align = "left",
  wrap = "wrap",
  truncate = false,
  as: Tag = "span",
}: TextProps) => {
  const classes = cn(
    styles[`size${size}`],
    styles[weight],
    styles[color],
    styles[align],
    wrap === "nowrap" && styles.nowrap,
    truncate && styles.truncate,
  )

  return <Tag className={classes}>{children}</Tag>
}
