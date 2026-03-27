"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import home from "../../../assests/logo5.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },

    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookF color="#1E3A5F" className="w-[40px] h-[40px]" />,
  },

  {
    id: "instagram",
    icon: <FaInstagram color="#1E3A5F" className="w-[40px] h-[40px]" />,
  },

  {
    id: "linkedin",
    icon: <FaLinkedin color="#1E3A5F" className="w-[40px] h-[40px]" />,
  },

  {
    id: "twitter",
    icon: <FaTwitter color="#1E3A5F" className="w-[40px] h-[40px]" />,
  },
];

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVarients = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-6 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-rol sm:grid-flow-col
        grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-10 sm:py-20"
          variants={setVarients}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-6 px-2 text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${index === 3 || index === 5 ? "text-green-main" : "text-gray-800"}`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-gray-700 mt-4 px-2 mb-8 text-lg leading-relaxed">
              {data && data.length ? data[0]?.summary : null}
            </p>

            <motion.div className="flex gap-4">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 1.5,
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9, rotate: -360, borderRadius: "100%" }}
                  className="cursor-pointer p-2 bg-white rounded-full shadow-lg"
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={containerRef}
            className="flex w-full justify-end px-4"
          >
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-green-main rounded-lg shadow-2xl "
            >
              <div className="w-[400px] h-[400px] top-[-20px] left-[-20px] rounded-lg border-[6px] border-gray-800 absolute"></div>

              <Image
                src={home}
                alt="home image"
                width={200}
                height={200}
                quality={75}
                className="w-full h-auto absolute top-[-15px] left-[-2px] rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
