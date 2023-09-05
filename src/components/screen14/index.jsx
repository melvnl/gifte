'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "The subtle fusion of fabric and blossoms creates a living ",
  "canvas, where each petal is a stroke of color and grace. ",
  "With a harmonious balance of vibrancy and refinement, ",
  "it embodies the beauty of nature's grace weaves a ",
  "symphony of textures and elements."
]

export default function Screen14() {

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
      <div ref={ref} className=" mt-2.5 grid grid-cols-2 gap-2 px-5">
        <Image src="/images/screen-14-img-1.png" width={156} height={242} alt='' />
        <div className=" flex flex-col">
          <h1 className=' font-RecklessNueu font-medium text-lg text-black'>Always</h1>
          <Image src="/images/screen-14-img-2.png" width={156} height={242} alt='' />
        </div>
        <div className=" -mt-6 flex flex-col">
          <Image src="/images/screen-14-img-3.png" width={156} height={242} alt='' />
          <h1 className=' font-RecklessNueu font-medium text-lg text-black mt-2'>Be Yourself</h1>
        </div>
        <Image src="/images/screen-14-img-4.png" width={156} height={242} alt='' />
      </div>
    </div>
  )
}
