import { motion } from "framer-motion";
import React from "react";

import { styles } from "@/styles";
import { staggerContainer } from "@/utils/motion";

export function SectionWrapper(Component: React.FC, idName: string) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
}
