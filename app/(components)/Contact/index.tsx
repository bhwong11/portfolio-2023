"use client"
import { sendMail } from "@/app/actions"
import React,{useState, useRef} from "react"
import { motion } from "framer-motion";
import { useActiveSectionScrollSpy } from "@/app/lib/hooks";
import { links } from "@/app/lib/data";
import SectionHeading from "@/app/(components)/SectionHeading";

export default function Contact(){
  const [email,setEmail]=useState<string>("")
  const [subject,setSubject]=useState<string>("")
  const [message,setMessage]=useState<string>("")
  const [error,setError]=useState<string>("")
  const [pending,setPending]=useState<boolean>(false)
  const ref = useRef<HTMLFormElement>(null)
  const { inView } = useActiveSectionScrollSpy(ref,links.contact)
  const sendEmailHandler = async (e:React.FormEvent)=>{
    e.preventDefault()
    setError("")
    setPending(true)
    const {status} = await sendMail({
      email,
      subject,
      message
    })
    setPending(false)
    if(status===200){
      setEmail("")
      setSubject("")
      setMessage("")
    }else{
      setError("error sending email, try again later")
    }
  }
  return (
    <section ref={ref} id={links.contact}>
      <motion.section
        className="bg-white border border-black rounded-lg p-3 shadow-md mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={inView?{ opacity: 1, y: 0 }:{opacity: 0, y: -100}}
        transition={{ delay: 0.175 }}
      >
      <SectionHeading>
        Contact
      </SectionHeading>
      <p className="text-gray-700 mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:bryanthwong@gmail.com">
          bryanthwong@gmail.com
        </a>{" "}
        or through this form.
      </p>
        <form className="mt-10 flex flex-col" onSubmit={sendEmailHandler} ref={ref}>
            <label htmlFor="email" className="text-left py-2">Enter email</label>
            <input
              className="px-4 rounded-lg border border-black transition-all"
              id="email"
              name="email"
              type="email"
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="subject" className="text-left py-2">Enter subject</label>
            <input 
              className="px-4 rounded-lg border border-black transition-all"
              id="subject"
              name="subject"
              type="text"
              value={subject} 
              onChange={(e)=>setSubject(e.target.value)}
            />
            <label htmlFor="message">
            <div className="text-left py-2">Enter message</div>
            <textarea
              id="message"
              name="message"
              className="w-full h-52 my-3 rounded-lg border border-black p-4 transition-all"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            </label>
            {error && (
              <div>
                {error}
              </div>
            )}
            <button
              className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:opacity-50"
              disabled={pending}
            >
              Send Email
              {pending && <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>}
            </button>
        </form>
      </motion.section>
    </section>
  )
}