"use client"
import { links } from "@/app/lib/data"
import { toLinkHash} from "@/app/lib/helpers"
import { useActiveSectionContext } from "@/app/lib/context"
import classNames from "classnames"
import { useRef, useEffect } from "react"
import { SectionId } from "@/app/lib/types"

export default function Navbar(){
  const {activeSection,setActiveSection}= useActiveSectionContext()
  const ref = useRef(null)
  const navbarHeight = ref.current?.['offsetHeight'] || '0px'
  useEffect(()=>{
    console.log('navbarHeight',navbarHeight)
    document.documentElement.style.setProperty('--navbar-height',`${navbarHeight}px`)
  },[navbarHeight])
  return (
    <div ref={ref} className="sticky top-0 flex gap-3 z-10 font-mono py-6">
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
            {
              "border border-black":activeSection===link
            }
          )}
        >
          {link}
        </a>
      ))}
    </div>
  )
}