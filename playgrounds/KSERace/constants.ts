import { SpringConfig } from "react-native-redash";

export const SHOW_EASING = false;
export const SHOW_SPRING = true;

export const CAT_SIZE = 60;
export const RACE_MARGIN = 40;

export type AllSpringConfig = SpringConfig & { velocity?: number };

export const springConfig = ({
  stiffness = 200,
  damping = 15,
  mass = 1,
  velocity = 10,
}: AllSpringConfig) => {
  return {
    velocity,
    config: {
      damping,
      mass,
      stiffness,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    },
  };
};
