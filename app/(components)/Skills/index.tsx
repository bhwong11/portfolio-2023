"use client";

import React from "react";
import SectionHeading from "@/app/(components)/SectionHeading";
import { skillsData } from "@/app/lib/data";
import { useActiveSectionScrollSpy } from "@/app/lib/hooks";
import { motion } from "framer-motion";
import { links } from "@/app/lib/data";
import { useRef } from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const ref = useRef(null)
  const {inView}=useActiveSectionScrollSpy(ref,links.skills);

  return (
    <section
      id={links.skills}
      ref={ref}
    >
      <motion.section
        className="max-w-[45rem] text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={inView?{ opacity: 1, y: 0 }:{opacity: 0, y: -100}}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </section>
  );
}
