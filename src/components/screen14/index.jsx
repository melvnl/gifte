'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';


const phrares = [
  "Always",
  "Be Yourself",
]


export default function Screen14() {

  const animation = {
    initial: { x: "100%" },
    enter: i => ({ x: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });



  return (
    <div className=' '>
      <Header />
      <div ref={ref} className=" mt-2.5 grid grid-cols-2 gap-2 px-5">
        <Image src="/images/screen-14-img-1.jpg" width={156 * 2} height={242 * 2} alt='' />
        <div className=" flex flex-col">
          <motion.div key={0} custom={0} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' font-RecklessNueu font-medium text-lg text-gray leading-6'>
            Always
          </motion.div>
          <Image src="/images/screen-14-img-2.jpg" width={156 * 2} height={242 * 2} alt='' />
        </div>
        <div className=" -mt-6 flex flex-col">
          <Image src="/images/screen-14-img-3.jpg" width={156 * 2} height={242 * 2} alt='' />
          <motion.div key={0} custom={0} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' font-RecklessNueu font-medium text-lg text-gray leading-6'>
            Be Yourself
          </motion.div>
        </div>
        <Image src="/images/screen-14-img-4.jpg" width={156 * 2} height={242 * 2} alt='' />
      </div>
    </div>
  )
}
