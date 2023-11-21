"use client"
import { links } from "@/app/lib/data"
import { toLinkHash} from "@/app/lib/helpers"
import { useActiveSectionContext } from "@/app/lib/context"
import classNames from "classnames"

export default function Navbar(){
  const {activeSection,setActiveSection}= useActiveSectionContext()
  return (
    <div className="sticky top-0 flex z-10 font-mono">
      {Object.values(links).map(link=>(
        <a 
          // href={toLinkHash(link)} 
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
          className={classNames({
            "border border-black":activeSection===link
          })}
        >
          {link}
        </a>
      ))}
    </div>
  )
}