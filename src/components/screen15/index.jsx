'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';

const phrares = [
  "The fusion of fabric and blossoms creates a ",
  "living canvas, where each petal is a stroke of ",
  "color and grace, embodying the beauty of ",
  "nature's grace with vibrancy and refinement.",
]

export default function Screen15() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=" h-screen bg-[url('/images/screen-15-bg.png')] bg-no-repeat bg-cover bg-center">
      <Header transparent={true} />
      <div ref={ref} className=" mt-3 flex flex-col justify-between px-5 py-3 ">
        <div className="flex justify-between font-RecklessNueu text-gray mb-1">
          <h1 className=' font-medium text-base'>Blossom Bouquet</h1>
          <span className=' text-base'>5/5</span>
        </div>
        <div className=" text-[#6D6D6D] text-justify leading-5">
          {phrares.map((phrase, index) => {
            return <motion.span key={index} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
              {phrase}
            </motion.span>
          })}
        </div>
      </div>
    </div>
  )
}
