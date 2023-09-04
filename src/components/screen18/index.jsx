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

export default function Screen18() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=' py-3 h-screen '>
      <div className=" pl-5">
        <Header />
      </div>
      <div ref={ref} className=" mt-3 h-full flex flex-col text-center justify-between">
        <div className=" flex justify-between">
          <Image src="/images/screen-18-img-1.png" width={176 * 1.1} height={255 * 1.1} alt='' />
          <Image src="/images/screen-18-img-2.png" width={176 * 1.1} height={255 * 1.1} alt='' />
        </div>
        <h1 className=' my-3 text-gray'>Stay glowing</h1>
        <div className=" flex justify-between">
          <Image src="/images/screen-18-img-1.png" width={176 * 1.1} height={255 * 1.1} alt='' />
          <Image src="/images/screen-18-img-2.png" width={176 * 1.1} height={255 * 1.1} alt='' />
        </div>
      </div>
    </div>
  )
}
