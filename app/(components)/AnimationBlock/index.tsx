import classNames from "classnames";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: (i:number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        pathLength: { delay, type: "spring", duration: 3, bounce: 0  },
        opacity: { delay, duration: 1},
      }
    };
  }
};

type AnimationBLockProps = {
  className?:string
}

type LineCoord ={
  x1:number,
  y1:number,
  x2:number,
  y2:number,
}

export default function AnimationBLock({
  className=""
}:AnimationBLockProps){
  const [screenHeight,setScreenHeight] = useState<number>(1)
  const [screenWidth,setScreenWidth] = useState<number>(1)

  useEffect(()=>{
    if(typeof window !== undefined){
      setScreenHeight(window.innerHeight)
      setScreenWidth(window.innerWidth)
      const resizeHandler = () =>{
        setScreenHeight(window.innerHeight)
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener("resize",resizeHandler)
      return ()=>window.removeEventListener("resize", resizeHandler);
    }
  },[])
  const slope = (screenHeight/(screenWidth/3))

  const linesCoords:LineCoord[] = [
    {
      x1:0,
      y1:screenHeight,
      x2:screenWidth,
      y2:screenHeight/2,
    },
    {
      x1:0,
      y1:0,
      x2:screenHeight/slope,
      y2:screenHeight,
    },
    {
      x1:(screenHeight/2)/slope,
      y1:screenHeight/2,
      x2:screenHeight/(1/slope),
      y2:0,
    },
    {
      x1:screenWidth/3,
      y1:0,
      x2:(screenHeight/slope)+screenWidth/3,
      y2:screenHeight,
    }
  ]

  return (
    <motion.svg
      width={screenWidth}
      height={screenHeight}
      viewBox={`0 0 ${screenWidth} ${screenHeight}`}
      initial="hidden"
      animate="visible"
      exit={{pathLength: 0}}
      className={classNames("fixed top-0 -z-50",className)}
    >
      {linesCoords.map((lineCoord:LineCoord, idx:number)=>(
        <motion.line
          key={`line-coords-${idx}`}
          x1={lineCoord.x1}
          y1={lineCoord.y1}
          x2={lineCoord.x2}
          y2={lineCoord.y2}
          stroke="#00cc88"
          strokeWidth="5"
          variants={draw}
          custom={1}
        />
      ))}
    </motion.svg>
  )
}