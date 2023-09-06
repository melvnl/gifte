'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "Discover a floral elegance representing a harmonious ",
  "blend of exquisite blooms but also inviting to immerse ",
  "yourself in a world of serene tranquility. Revel in petal ",
  "intricacies and mirrored ripples, a testament to nature's ",
  "beauty and design fusion."
]



export default function Screen10() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=' text-[#6D6D6D] '>
      <Header />
      <div className=" text-center pt-16">
        <Image src="/images/screen-10-flower-1.png" width={425} height={175} alt='' />
        <h1 className=' font-RecklessNueu my-2'>Glow</h1>
        <Image src="/images/screen-10-flower-2.png" width={425} height={175} alt='' />
        <h1 className=' font-RecklessNueu my-2'>Within You</h1>
        <Image src="/images/screen-10-flower-3.png" width={425} height={175} alt='' />
      </div>
    </div>
  )
}
