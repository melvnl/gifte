'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "This crystal-clear box unveils the intricate beauty of ",
  "freshly picked tulips as sunlight dances on their vibrant ",
  "petals. Symbolizing love and new beginnings, these",
  "tulips stand tall in their transparent sanctuary, reminding ",
  "us of life's enduring beauty."
]

export default function Screen8() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className='px-5 py-3'>
      <Header />
      <div className=" text-gray mt-6">
        <Image src="/images/screen-8-img-1.png" width={320} height={200} alt='' className=' mb-3' />
        <div className=" -ml-5 flex">
          <Image src="/images/screen-8-img-2.png" width={174} height={200} alt='' />
          <h1 className=' ml-3 mr-auto'>Feel</h1>
        </div>
        <div className=" flex flex-col ">
          <h1 className=' ml-auto'>The</h1>
          <Image src="/images/screen-8-img-3.png" width={174} height={285} alt='' className=' ml-auto -mr-5' />
        </div>
        <h1 className=' -mt-72'>Glow</h1>
      </div>
    </div>
  )
}
