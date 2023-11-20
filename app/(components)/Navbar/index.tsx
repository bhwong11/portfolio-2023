"use client"
import { links } from "@/app/lib/data"
import { toLinkHash} from "@/app/lib/helpers"
import { useActiveSectionContext } from "@/app/lib/context"
import classNames from "classnames"

export function Navbar(){
  const {activeSection}= useActiveSectionContext()
  // console.log('active',activeSection)
  return (
    <div className="sticky top-0 flex">
      {Object.values(links).map(link=>(
        <a href={toLinkHash(link)} className={classNames({
          "border border-black":activeSection===link
        })}>
          {link}
        </a>
      ))}
    </div>
  )
}