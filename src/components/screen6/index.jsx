'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

const leftCol = [
  " mini collection draws inspiration from the concept of inner beauty. Each product within this collection is designed with a focus on simplicity, both in its arrangement and packaging. We embrace texture and intricate visual details to elevate your sensory experience",
]

export default function Screen6() {

  const [start, setStart] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  useEffect(() => {
    if (!start) {
      setTimeout(() => {
        setStart(true);
      }, 300); // Adjust the delay time as needed
    }
  }, [start]);

  return (
    <div className=' '>
      <Header />
      <div ref={ref} className=" mt-[190px] text-gray leading-5 text-sm gap-4 px-5 py-3">
        <span className=" font-RecklessNueu font-medium italic w-fit">
          <Typewriter
            words={["The Garden Of Glow"]}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={15}
            onLoopDone={() => {
              console.log("!@3")
              setStart(true)
            }}
          />
        </span>
        <span>
          {start && (<Typewriter
            words={leftCol}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={15}
            onLoopDone={() => { console.log("taik") }}
          // deleteSpeed={0}
          />)}
        </span>

      </div>
    </div>
  )
}
