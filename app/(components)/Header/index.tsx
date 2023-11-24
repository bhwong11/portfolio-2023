"use client"
import Image from 'next/image'
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from 'react';
import { useActiveSectionScrollSpy } from '@/app/lib/hooks';
import { links } from '@/app/lib/data';
import SectionDivider from '@/app/(components)/SectionDivider'
import AnimationBLock from '@/app/(components)/AnimationBlock';

export default function Header() {
  const ref = useRef<HTMLDivElement>(null)
  useActiveSectionScrollSpy(ref,links.home)
  return (
      <div
        ref={ref}
        id={links.home}
        className="header pt-24 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col"
      >
          <AnimationBLock/>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
            }}
          >
            <Image
              src="/headshot.jpg"
              alt="Bryant Wong Picture"
              priority
              width="192"
              height="192"
              quality="95"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">
              <div>Hi I&apos;m Bryant,</div>
              <div>A full-stack developer</div>
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="text-center bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="w-full sm:w-auto bg-white p-4 text-gray-700 hover:text-gray-950 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black"
              href="https://linkedin.com/in/bryanthwong"
              target="_blank"
            >
              <BsLinkedin /><span className="sm:hidden">LinkedIn</span>
            </a>

            <a
              className="w-full sm:w-auto bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black"
              href="https://github.com/bhwong11"
              target="_blank"
            >
              <FaGithubSquare /><span className="sm:hidden">Github</span>
            </a>
          </motion.div>
          <SectionDivider/>
      </div>
  )
}
