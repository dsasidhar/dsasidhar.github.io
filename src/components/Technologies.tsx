import { motion } from "framer-motion";

import { SectionWrapper } from "@/hoc/SectionWrapper";
import { styles } from "@/styles";
import { technologies } from "@/utils/constants";
import { textVariant } from "@/utils/motion";

import BallCanvas from "./canvas/BallCanvas";

function Technologies() {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="visible"
      >
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} text={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Technologies, "tech");
