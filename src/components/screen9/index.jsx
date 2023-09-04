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



export default function Screen9() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <React.Fragment>
      <Header />
      <div ref={ref} className=" mt-[76px] flex flex-col justify-between gap-4">
        <div className="flex justify-between">
          <h1 className=' text-base'>Clear Handbag</h1>
          <span className=' text-base'>2/6</span>
        </div>
        <div className=" text-[#6D6D6D] text-justify">
          {phrares.map((phrase, index) => {
            return <div key={index} className="overflow-hidden">
              {<motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
                {phrase}
              </motion.p>}
            </div>;
          })}
        </div>
        <Image src="/images/screen-9-flower.png" width={425} height={502} alt='' />
      </div>
    </React.Fragment>
  )
}
