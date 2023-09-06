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
    <div>
      <Header />
      <div ref={ref} className=" mt-3">
        <div className="flex flex-col relative">
          <Image src="/images/screen-12-img.png" width={425} height={655} alt='' />
        </div>
      </div>
    </div>
  )
}
