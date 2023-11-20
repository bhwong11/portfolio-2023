import React,{MutableRefObject, useEffect} from "react"
import { useActiveSectionContext } from "@/app/lib/context"
import { links } from "@/app/lib/data";
import { useInView } from "react-intersection-observer";
import { SectionId } from "@/app/lib/types";

export const useSetActiveSection = (sectionId:SectionId)=>{
  const {ref, inView} = useInView()
  const { activeSection, setActiveSection,} = useActiveSectionContext()
  useEffect(()=>{
    if(inView) {
      setActiveSection(links[sectionId] ?? links.home)
    }
    if(!inView && activeSection===sectionId){
      setActiveSection(null)
    }
  },[inView, activeSection])

  return ref
}