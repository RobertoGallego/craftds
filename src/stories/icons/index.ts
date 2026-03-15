import type { ComponentType, SVGProps } from "react"

import HomeIcon from "../../assets/home.svg?react"
import HospitalIcon from "../../assets/hospital.svg?react"

type SvgIconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconRegistry = {
  home: HomeIcon,
  hospital: HospitalIcon,
} satisfies Record<string, SvgIconComponent>

export type IconName = keyof typeof iconRegistry

export const icons = iconRegistry
