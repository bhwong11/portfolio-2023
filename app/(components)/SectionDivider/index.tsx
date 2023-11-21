"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type SectionDividerProps = {
  className?:string
}

export default function SectionDivider({
  className=""
}:SectionDividerProps) {
  return (
    <motion.div
      className={classNames(
        "bg-gray-200 my-24 h-16 w-1 rounded-full",
        className
      )}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}