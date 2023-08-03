import React from "react";
import SpaIcon from "../../atom/Icons/SpaIcon";

interface IIcon {
  id: number;
  icon: React.ComponentType;
  active: boolean;
  text: string;
}
export const circleIconMap: IIcon[] = [
  {
    id: 1,
    icon: SpaIcon,
    active: true,
    text: "Spa",
  },
  {
    id: 2,
    icon: SpaIcon,
    active: false,
    text: "Spa",
  },
  {
    id: 3,
    icon: SpaIcon,
    active: false,
    text: "Spa",
  },
];
