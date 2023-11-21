"use client";

import React from "react";
import SectionHeading from "@/app/(components)/SectionHeading"
import { projectsData } from "@/app/lib/data";
import Project from "@/app/(components)/Project"
import { useActiveSectionScrollSpy } from "@/app/lib/hooks";
import { links } from "@/app/lib/data";
import { toLinkId } from "@/app/lib/helpers";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useActiveSectionScrollSpy(ref,links.projects);

  return (
    <div ref={ref} id={links.projects} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
