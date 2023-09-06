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

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=' '>
      <Header />
      <div ref={ref} className=" mt-[200px] flex flex-col text-gray items-center leading-5 text-sm gap-4 px-5 py-3">
        <Typewriter
          words={leftCol}
          loop={1}
          cursor
          cursorStyle=''
          typeSpeed={15}
          deleteSpeed={1000000}
        />
      </div>
    </div>
  )
}
