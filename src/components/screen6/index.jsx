'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const leftCol = [
  "The Garden of Glow mini collection draws inspiration from the concept of inner beauty. Each product within this collection is designed with a focus on simplicity, both in its arrangement and packaging. We embrace texture and intricate visual details to elevate your sensory experience",
]

export default function Screen6() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=' '>
      <Header />
      <div ref={ref} className=" mt-[76px] flex flex-col text-gray items-center h-screen justify-center leading-5 text-sm gap-4 px-5 py-3">
        <Typewriter
          words={leftCol}
          loop={1}
          cursor
          cursorStyle='|'
          typeSpeed={15}
          deleteSpeed={1000000}
        />
      </div>
    </div>
  )
}
