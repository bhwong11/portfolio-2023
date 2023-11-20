export const toLinkId = (name:string): string=>{
  return name.toLowerCase()
}

export const toLinkHash = (name:string): string=>{
  return `#${toLinkId(name)}`
}