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

export default function Screen12() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className='py-3'>
      <div className=" px-5">
        <Header />
      </div>
      <div ref={ref} className=" mt-6">
        <div className="flex flex-col relative">
          <Image src="/images/screen-12-img-1.png" width={340} height={200} alt='' />
          <div className=" absolute top-1/4 -right-10 max-w-[240px] max-h-[190px] overflow-hidden">
            <Image src="/images/screen-12-img-2.svg" width={360} height={190} alt='' className=' ' />
          </div>
          <Image src="/images/screen-12-img-3.png" width={294} height={316} className=' mt-4 ml-5' alt='' />
        </div>
      </div>
    </div>
  )
}
