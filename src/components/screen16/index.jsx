'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "This crystal-clear box unveils the intricate beauty of ",
  "freshly picked tulips as sunlight dances on their vibrant ",
  "petals. Symbolizing love and new beginnings, these ",
  "tulips stand tall in their transparent sanctuary, reminding ",
  "us of life's enduring beauty."
]

export default function Screen16() {

  const animation = {
    initial: { x: "100%" },
    enter: i => ({ x: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='h-screen '>
      <Header />
      <motion.div key={0} custom={0} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='  mt-10 h-full '>
        <Image src="/images/screen-16-img.png" width={405 * 2} height={535 * 2} alt='' className=' w-full -ml-4' />
      </motion.div>
    </div>
  )
}
