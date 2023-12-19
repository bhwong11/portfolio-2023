"use client";

import { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  github,
  imageUrl,
  liveLink
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-200 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-slate-300 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-slate-700">{title}</h3>
          <p className="my-2 leading-relaxed text-slate-700">
            {description}
          </p>
          <div className="flex gap-2">
          {github && (
            <a
              href={github} 
              target="_blank" 
              className="flex items-center mb-2 px-2 py-1 bg-gray-200 text-black hover:text-white hover:bg-black/[0.3] w-min rounded-full border border-black hover:border-white">
              <FaGithubSquare /><span className="">&nbsp;Github</span>
            </a>)
          }
          {liveLink && (
            <a
              href={liveLink} 
              target="_blank" 
              className="flex items-center mb-2 px-2 py-1 bg-gray-200 text-black hover:text-white hover:bg-black/[0.3] w-fit rounded-full border border-black hover:border-white">
              Live Link
            </a>)
          }
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={imageUrl}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
