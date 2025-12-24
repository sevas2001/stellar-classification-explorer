import { ReactNode } from "react";

export enum ClusterType {
  RED_GIANT = "Gigantes Rojas",
  MAIN_SEQUENCE = "Secuencia Principal",
  HIGH_VELOCITY = "Alta Velocidad",
  WHITE_DWARF = "Enanas Blancas",
  BLUE_YOUNG = "Estrellas Azules",
  SUB_GIANT = "Subgigantes"
}

export interface ClusterData {
  id: string;
  name: string;
  sector: string;
  ngc: string; // Used as a placeholder for catalog ID or coordinates
  type: ClusterType;
  starCount: number;
  avgTemp: number; // Kelvin
  radVel: number; // km/s
  density: number; // PWD
  metallicity: number; // [Fe/H]
  gravity: number; // logg
  image: string;
  description: string;
  stable: boolean;
}

export interface NavItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}