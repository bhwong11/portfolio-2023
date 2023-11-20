"use client"
import { motion } from "framer-motion";
import SectionHeading from '@/app/(components)/SectionHeading';
import { useInView } from "framer-motion"
import { useRef } from 'react';
import { useSetActiveSection } from '@/app/lib/hooks';
import { links } from '@/app/lib/data';

export default function About() {
  const ref = useSetActiveSection(links.about)
  return (
    <section ref={ref} id={links.about}>
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Nice To Meet You!</SectionHeading>
      <p className="mb-3">
      I am a software engineer with experience in JavaScript, CSS, REACTjs, the Django Stack, and the MERN Stack. 
      My background in digital marketing has given me an eye for detail and experience with reading documentation to learn new technologies. 
      I am passionate about problem solving, love testing and learning. Along with programing I love to cook(and eat). 
      I'm never too far from either a kitchen or keyboard.
      </p>
    </motion.section>
    </section>
  )
}
