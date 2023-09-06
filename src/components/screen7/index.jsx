'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "A crystal-clear box unveils the intricate beauty",
  "of freshly picked tulips, symbolizing love and ",
  "new beginnings as they stand tall in their ",
  "transparent sanctuary, reminding life’s beauty.",
]

export default function Screen7() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=" h-screen bg-[url('/images/screen-7-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <Header transparent={true} />
      <div ref={ref} className=" mt-2.5 flex flex-col justify-between bg-transparent px-5">
        <div className="flex justify-between font-RecklessNueu font-semibold text-gray mb-1">
          <h1 className=' text-base'>Tulip Showcase</h1>
          <span className=' text-base'>1/5</span>
        </div>
        <div className=" font-Inter text-[#6D6D6D] text-justify leading-5 ">
          {phrares.map((phrase, index) => {
            return <motion.span key={index} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
              {phrase}
            </motion.span>
          })}
        </div>
        {/* <Image src="/images/flower.png" width={425} height={502} alt='' className=' mt-3' /> */}
      </div>
    </div >
  )
}
