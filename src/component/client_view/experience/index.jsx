"use client";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceViewAndEducationView({
  educationData,
  experienceData,
}) {
  // console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
                {"My Experience".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem, index) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-[#F43F5E]" />
                            <TimelineConnector className="bg-[#F43F5E]" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div
                              className="border-[2px] p-4 rounded-[8px] border-[#1E3A5F] mt-[14px] ml-[16px]"
                              key={index}
                            >
                              <p className="font-extrabold">
                                Position:
                                <span className="font-medium">
                                  {" "}
                                  {experienceItem.position}
                                </span>
                              </p>
                              <p className="font-extrabold mt-2">
                                Company:
                                <span className="font-medium">
                                  {" "}
                                  {experienceItem.company}
                                </span>
                              </p>
                              <p className="font-extrabold mt-2">
                                Duration:
                                <span className="font-medium">
                                  {" "}
                                  {experienceItem.duration}
                                </span>
                              </p>
                              <p className="font-extrabold mt-2">
                                Location:
                                <span className="font-medium">
                                  {" "}
                                  {experienceItem.location}
                                </span>
                              </p>

                              <p className="font-extrabold mt-2">
                                Job Profile:
                                <span className="font-medium">
                                  {" "}
                                  {experienceItem.jobprofile}
                                </span>
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Education section starts here */}

        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col items-center justify-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem, index) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-[#F43F5E]" />
                            <TimelineConnector className="bg-[#F43F5E]" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div
                              className="border-[2px] p-4 rounded-[8px] border-[#1E3A5F] mt-[14px] ml-[16px]"
                              key={index}
                            >
                              <p className="font-extrabold">
                                College:
                                <span className="font-medium">
                                  {" "}
                                  {educationItem.college}
                                </span>
                              </p>
                              <p className="font-extrabold mt-2">
                                Year:
                                <span className="font-medium">
                                  {" "}
                                  {educationItem.year}
                                </span>
                              </p>
                              <p className="font-extrabold mt-2">
                                Degree:
                                <span className="font-medium">
                                  {" "}
                                  {educationItem.degree}
                                </span>
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Education section ends here */}
      </div>
    </div>
  );
}
