"use client"
import { links } from "@/app/lib/data"
import { toLinkHash} from "@/app/lib/helpers"
import { useActiveSectionContext } from "@/app/lib/context"
import classNames from "classnames"
import { useRef, useEffect } from "react"
import { SectionId } from "@/app/lib/types"
import { motion } from "framer-motion";


export default function Navbar(){
  const {activeSection,setActiveSection}= useActiveSectionContext()
  const ref = useRef(null)
  const navbarHeight = ref.current?.['offsetHeight'] || '0px'

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
          <a 
            key={`link-${link}`}
            onClick={()=>{
              setActiveSection(link)
              const linkEl: HTMLElement | null = document.querySelector(toLinkHash(link))
              let scrollTo:number = (linkEl?.offsetTop??0)-(window.innerHeight-(linkEl?.offsetHeight??0))

              if((linkEl?.offsetHeight??0)>window.innerHeight){
                scrollTo = (linkEl?.offsetTop??0)-50
              }
              window.scrollTo(0,scrollTo) 
            }}
            className={classNames(
              "rounded-full px-2 py-1",
              {
                "border border-black":activeSection===link
              }
            )}
          >
            {link}
          </a>
        ))}
      </motion.div>
    </div>
  )
}