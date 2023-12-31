'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "Two exquisite flowers in holographic paper with ",
  "pill-shaped tag dazzling in vibrant colors under ",
  "the light, uplifting your spirits taking you to a ",
  "world where nature and art intertwine.",
]

export default function Screen9() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=" h-screen bg-[url('/images/screen-9-bg.png')] bg-no-repeat bg-cover bg-center">
      <Header transparent={true} />
      <div ref={ref} className="flex flex-col justify-between px-5 py-3">
        <div className="font-RecklessNueu text-gray flex justify-between mb-1">
          <h1 className=' font-medium text-base'>Euphoria Floral Tag</h1>
          <span className=' text-base'>2/5</span>
        </div>
        <div className=" text-[#6D6D6D] text-justify leading-5">
          {phrares.map((phrase, index) => {
            return <motion.div key={index} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
              {phrase}
            </motion.div>
          })}
        </div>
      </div>
    </div>
  )
}
