export interface Pokemon {
  name: string;
  url?: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatName;
}

export interface PokemonStatName {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface DetailBadgeProps {
  type: string;
  value: string;
  className?: string;
}

export interface CardProps {
  name: string;
}

export interface RadarChartProps {
  stats: PokemonStat[];
  name: string;
}
