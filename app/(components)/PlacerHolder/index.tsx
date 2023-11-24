"use client"
import {motion} from "framer-motion"
import { onloadMotionDelay } from "@/app/lib/helpers"

type MotionPlaceHolderProps = {
  delay?:number
}

export const MotionPlaceHolder = ({delay = onloadMotionDelay}:MotionPlaceHolderProps)=>(
  <motion.div
  initial={{ opacity: 1}}
  animate={{ opacity: 0 }}
  transition={{ delay:delay-.05 }}
  className="absolute flex justify-center items-center font-mono h-screen w-full -z-10"
  >
    LOADING...
  </motion.div>
)