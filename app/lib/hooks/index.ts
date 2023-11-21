import React,{MutableRefObject, useEffect} from "react"
import { useActiveSectionContext } from "@/app/lib/context"
import { links } from "@/app/lib/data";
// import { useInView } from "react-intersection-observer";
import { SectionId } from "@/app/lib/types";
import { useInView } from "framer-motion";

export const useSetActiveSection = (ref:MutableRefObject<null | Element>,sectionId: SectionId)=>{
  const inView = useInView(ref)
  const { activeSection, setActiveSection,} = useActiveSectionContext()
  useEffect(()=>{
    console.log('active section',sectionId,)
    if(inView) {
      setActiveSection(links[sectionId])
    }
    if(!inView && activeSection===sectionId){
      setActiveSection(null)
    }
  },[inView, activeSection])

  return {
    inView
  }
}