"use client"
import { motion } from "framer-motion";
import SectionHeading from '@/app/(components)/SectionHeading';
import { useRef } from 'react';
import { useActiveSectionScrollSpy } from '@/app/lib/hooks';
import { links } from '@/app/lib/data';
import SectionDivider from '@/app/(components)/SectionDivider'


export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const {inView} = useActiveSectionScrollSpy(ref,links.about)
  return (
    <section ref={ref} id={links.about} className="flex flex-col items-center">
    <motion.section
      className="max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={inView?{ opacity: 1, y: 0 }:{opacity: 0, y: -100}}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Nice To Meet You!</SectionHeading>
      <p className="mb-3">
      I am a software engineer with experience in JavaScript, HTML, CSS, REACTjs, the Django Stack, and the MERN Stack. 
      My background in digital marketing has given me an eye for detail and experience with reading documentation to learn new technologies. 
      I am passionate about problem solving, love testing and learning. Along with programing I love to cook(and eat). 
      I'm never too far from either a kitchen or keyboard.
      </p>
    </motion.section>
    <SectionDivider className="my-12"/>
    </section>
  )
}
