"use client"
import { links } from "@/app/lib/data"
import { useActiveSectionContext } from "@/app/lib/context"
import classNames from "classnames"
import { useRef, useEffect } from "react"
import { SectionId } from "@/app/lib/types"
import { motion } from "framer-motion";
import { scrollToLink } from "@/app/lib/helpers"

export default function Navbar(){
  const {activeSection}= useActiveSectionContext()
  const ref = useRef(null)
  const navbarHeight = ref.current?.['offsetHeight'] || 0

  useEffect(()=>{
    document.documentElement.style.setProperty('--navbar-height',`${navbarHeight}px`)
  },[navbarHeight])

  return (
    <div
      ref={ref}
      className="sticky top-0 z-10 flex justify-center xs:px-24 xs:pt-2"
    >
      <motion.div
        className="bg-white flex flex-wrap gap-3 font-mono py-3 px-3 rounded-full border border-black shadow-md justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        {Object.values(links).map((link:SectionId)=>(
          <>
          <a 
            key={`link-${link}`}
            data-tooltip-target="tooltip-default"
            onClick={()=>{
              scrollToLink(link)
            }}
            className={classNames(
              "rounded-full px-2 py-1 hover:cursor-pointer group/link relative",
              {
                "border border-black":activeSection===link
              }
            )}
          >
            {link}
        <span className='invisible absolute group-hover/link:visible group-hover/link:z-50 shadow-md rounded p-1 bg-gray-100 top-10 left-0 xs:w-max'>
          go to {link}
        </span>
          </a>
        </>
        ))}
      </motion.div>
    </div>
  )
}