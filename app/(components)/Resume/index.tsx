"use client"
import { motion } from "framer-motion";
import { useActiveSectionScrollSpy } from "@/app/lib/hooks"
import { links } from "@/app/lib/data"
import { useRef } from "react"

export default function Resume(){
  const ref = useRef<HTMLDivElement>(null)
  const {inView}=useActiveSectionScrollSpy(ref,links.resume)
  return(
    <section ref={ref} id={links.resume}>
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={inView?{ opacity: 1, y: 0 }:{}}
      transition={{ delay: 0.175 }}
    >
          <h3 className="" >Want To Work Togther?</h3>
          <a className="" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
      </motion.section>
    </section>
  )
}