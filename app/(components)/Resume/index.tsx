"use client"
import { motion } from "framer-motion";
import { useActiveSectionScrollSpy } from "@/app/lib/hooks"
import { links } from "@/app/lib/data"
import { useRef } from "react"
import SectionHeading from "@/app/(components)/SectionHeading";
import SectionDivider from '@/app/(components)/SectionDivider'

export default function Resume(){
  const ref = useRef<HTMLDivElement>(null)
  const {inView}=useActiveSectionScrollSpy(ref,links.resume)
  return(
    <section ref={ref} id={links.resume} className="flex flex-col items-center">
    <motion.section
      className="max-w-[45rem] text-center flex flex-col items-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={inView?{ opacity: 1, y: 0 }:{opacity: 0, y: -100}}
      transition={{ delay: 0.175 }}
    >
          <SectionHeading>Want To Work Togther?</SectionHeading>
          <a
            className="font-mono px-4 w-max flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:opacity-50"
            href="https://docs.google.com/document/d/1KAY_7LBCK2BZKaSXXIlCzp8UKfksjWdm/edit?usp=sharing&ouid=111430167125586998476&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
      </motion.section>
      <SectionDivider/>
    </section>
  )
}