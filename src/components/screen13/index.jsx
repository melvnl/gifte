'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

const phrares = [
  "Crafted with love, it cradles a single rose, ",
  "signifying dedication. The pink represents ",
  "unwavering love, and the floral details form a ",
  "cupid's heart and arrow, symbolizing the ",
  "enchantment of Gifte. It's a cherished token of ",
  "affection and a heartfelt connection."
]

export default function Screen13() {

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
      <div ref={ref} className=" mt-3 flex flex-col justify-between px-5 py-3">
        <div className="flex justify-between font-RecklessNueu text-gray font-semibold mb-1">
          <h1 className=' text-base'>Cupid Heart</h1>
          <span className=' text-base'>4/5</span>
        </div>
        <div className=" text-[#6D6D6D] text-justify leading-5">
          {phrares.map((phrase, index) => {
            return <motion.span key={index} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
              {phrase}
            </motion.span>
          })}
        </div>
        <Image src="/images/screen-13-flower.png" width={425} height={502} alt='' className='mt-3' />
      </div>
    </div>
  )
}
