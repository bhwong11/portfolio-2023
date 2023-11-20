import React,{MutableRefObject, useEffect} from "react"
import { useActiveSectionContext } from "@/app/lib/context"
import { links } from "@/app/lib/data";
import { useInView } from "react-intersection-observer";
import { SectionId } from "@/app/lib/types";

export const useSetActiveSection = (sectionId:SectionId, threshold = 0.75)=>{
  const {ref, inView} = useInView({
    threshold
  })
  const { setActiveSection,} = useActiveSectionContext()
  useEffect(()=>{
    console.log('section',sectionId,inView)
    if(inView) setActiveSection(links[sectionId] ?? links.home)
  },[inView])

  return ref
}