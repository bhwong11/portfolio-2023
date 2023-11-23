"use client";

import React from "react";
import SectionHeading from "@/app/(components)/SectionHeading"
import { projectsData } from "@/app/lib/data";
import Project from "@/app/(components)/Project"
import { useActiveSectionScrollSpy } from "@/app/lib/hooks";
import { links } from "@/app/lib/data";
import { useRef } from "react";
import SectionDivider from '@/app/(components)/SectionDivider'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useActiveSectionScrollSpy(ref,links.projects);

  return (
    <div ref={ref} id={links.projects} className="flex flex-col items-center">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider/>
    </div>
  );
}
