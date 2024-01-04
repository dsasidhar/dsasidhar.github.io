import { motion } from "framer-motion";
import React from "react";
import useDebugRender from "tilg";

import { SectionWrapper } from "@/hoc/SectionWrapper";
import { styles } from "@/styles";
import { services } from "@/utils/constants";
import { fadeIn, textVariant } from "@/utils/motion";

function ServiceCard({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="card-gradient w-full rounded-[20px] p-[1px] shadow-card xs:w-[250px]"
    >
      <motion.div
        transition={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-jetLight px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
        <h3 className="text-center text-[18px] font-bold text-taupe">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
}

function About() {
  useDebugRender();

  return (
    <div className="-mt-[6rem]">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="visible"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className="mt-4 max-w-3xl text-justify text-[18px] leading-[30px] text-taupe"
      >
        A seasoned Full-Stack Engineer with over ten years of experience in
        developing innovative web solutions. Specializing in React, Node.js, and
        TypeScript, spearheaded numerous projects, ranging from intricate
        front-end applications to robust backend systems. His expertise includes
        creating dynamic user interfaces with CSS animations and constructing
        scalable server-side applications. Known for the ability to tackle
        complex challenges, consistently pushing the boundaries of web
        development to deliver exceptional, user-centric experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");
