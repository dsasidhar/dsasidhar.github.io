import { motion } from "framer-motion";
import React from "react";

import { multiMonitor } from "@/assets";
import { styles } from "@/styles";

export function AboveFold() {
  return (
    <>
      <div className="absolute left-0 top-0 z-0 h-[100vh] w-screen">
        <img
          src={multiMonitor}
          alt="background"
          className="hidden h-full w-full object-cover sm:block"
        />
      </div>

      <section
        className="relative mx-auto flex h-screen w-full flex-col overflow-hidden 
            bg-hero-mobile sm:flex-row sm:bg-hero"
      >
        <div
          className={`absolute inset-0 top-[150px] sm:top-[250px] 
              lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
              mx-auto flex max-w-7xl flex-row items-start
              justify-between gap-3`}
        >
          <div className="ml-2 mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="bw-gradient h-40 w-1 sm:hidden sm:h-80" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} font-poppins uppercase text-eerieBlack`}
            >
              <span className="capitalize">Hi, I'm </span>
              <span
                className="font-mova text-[50px]
                    font-extrabold uppercase text-eerieBlack
                    sm:text-[90px] sm:text-battleGray"
              >
                <span className="text-lightRed">S</span>
                <span>asidhar </span>
                <span className="text-lightRed">D</span>
                <span>wadasi</span>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A Passionate Full stack developer and a problem solver.
            </p>
          </div>
          <div
            className="xxs:mt-4 flex w-screen flex-col 
                items-start justify-center sm:-ml-[3rem]"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute bottom-32 flex w-full 
              items-center justify-center xs:bottom-10"
        >
          <a href="#about">
            <div
              className="flex h-[64px] w-[35px] items-start 
                justify-center rounded-3xl border-4
                border-dim  p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="mb-1 h-3 w-3 rounded-full bg-taupe"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
