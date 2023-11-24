import { SectionId } from "@/app/lib/types"

export const scrollPadding:number = 20

export const onloadMotionDelay = 0.175

export const toLinkId = (name:string): string=>{
  return name.toLowerCase()
}

export const toLinkHash = (name:string): string=>{
  return `#${toLinkId(name)}`
}

export const scrollToLink = (link:SectionId,navbarHeight:number)=>{
  const windowHeightAdjusted = window.innerHeight-navbarHeight
  const linkEl: HTMLElement | null = document.querySelector(toLinkHash(link))
  let scrollTo:number = (linkEl?.offsetTop??0)-(windowHeightAdjusted-(linkEl?.offsetHeight??0))

  if((linkEl?.offsetHeight??0)>windowHeightAdjusted){
    scrollTo = (linkEl?.offsetTop??0)-navbarHeight-scrollPadding
  }
  window.scrollTo(0,scrollTo) 
}