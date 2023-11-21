import { links } from "@/app/lib/data";

export type SectionId = keyof (typeof links)

export type MailData = {
  email?:string,
  subject?:string,
  message?:string
}