import type { ComponentType, SVGProps } from "react"
import { HomeIcon } from "./HomeIcon"
import { HospitalIcon } from "./HospitalIcon"

type SvgIconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconRegistry = {
  home: HomeIcon,
  hospital: HospitalIcon,
} satisfies Record<string, SvgIconComponent>

export type IconName = keyof typeof iconRegistry

export const icons = iconRegistry
