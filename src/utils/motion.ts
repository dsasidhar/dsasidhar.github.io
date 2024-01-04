import { Variants } from "framer-motion";

export function textVariant(delay?: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 1.25,
        type: "spring",
        bounce: 0.5,
      },
    },
  };
}
function getXYBasedOnDirection(direction: string): {
  x: number;
  y: number;
} {
  return {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  };
}

export function fadeIn(
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween" = "spring",
  delay: number = 0,
  duration: number = 0.5,
): Variants {
  return {
    hidden: {
      ...getXYBasedOnDirection(direction),
      opacity: 0,
    },
    show: {
      transition: {
        type: type,
        delay: delay,
        bounce: 0.75,
        duration: duration,
        ease: "easeOut",
      },
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
}

export function staggerContainer(
  staggerChildren: number = 0.1,
  delayChildren: number = 0,
): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
}
