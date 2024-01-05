import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { download, downloadHover, resume } from "@/assets";
import { SectionWrapper } from "@/hoc/SectionWrapper";
import { styles } from "@/styles";
import { experiences, IExperience } from "@/utils/constants";
import { textVariant } from "@/utils/motion";
import { downloadResume } from "@/utils/resumeHandler";

function ExperienceCard({ experience }: { experience: IExperience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#eaeaec",
        color: "#292929",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      date={experience.date}
      dateClassName="text-[22px] font-bold tracking-[1px] text-white"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-beckman text-[24px] font-bold tracking-[2px] text-jetLight">
          {experience.title}
        </h3>
        <p
          className="font-overcameBold text-[22px] font-semibold tracking-[1px] text-taupe"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="space-between flex flex-row justify-between">
          <span className="font-beckman text-taupe">{experience.type}</span>
          <span className="font-mova text-taupe">{experience.location}</span>
        </p>
      </div>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="visible"
      >
        <p className={`${styles.sectionSubText} pl-[2rem] sm:pl-16`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} pl-[2rem] sm:pl-16`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={resume}
                  alt="resume"
                  className="h-[45%] w-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo mt-[16px] flex 
                h-[46px] w-[125px] items-center 
                justify-between gap-1 whitespace-nowrap rounded-[10px] bg-jetLight py-5 
                pl-3 pr-3 font-beckman text-[14px] 
                font-bold text-timberWolf transition duration-[0.2s] 
                ease-in-out hover:bg-battleGray hover:text-eerieBlack 
                sm:mt-[22px] sm:h-[58px] sm:w-[148px] 
                sm:text-[18px]"
              onClick={() => {
                downloadResume();
              }}
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  ?.setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  ?.setAttribute("src", download);
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn h-[23px] w-[23px] 
                  object-contain sm:h-[26px] sm:w-[26px]"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
