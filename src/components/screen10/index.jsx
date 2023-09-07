'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

export default function Screen10() {

  const animation1 = {
    initial: { x: "100%" },
    enter: i => ({ x: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const animation3 = {
    initial: { x: "-100%" },
    enter: i => ({ x: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className=' text-gray '>
      <Header />
      <div className=" text-center">
        <motion.div key={0} custom={0} variants={animation1} initial="initial" animate={inView ? "enter" : ""}>
          <Image src="/images/screen-10-flower-1.png" width={425} height={175} alt='' />
        </motion.div>
        <h1 className=' font-RecklessNueu text-lg leading-6 my-2'>Glow</h1>
        <Image src="/images/screen-10-flower-2.png" width={425} height={175} alt='' />
        <h1 className=' font-RecklessNueu my-2 text-lg leading-6'>Within You</h1>
        <motion.div key={1} custom={1} variants={animation3} initial="initial" animate={inView ? "enter" : ""}>
          <Image src="/images/screen-10-flower-3.png" width={425} height={175} alt='' />
        </motion.div>
      </div>
    </div>
  )
}
