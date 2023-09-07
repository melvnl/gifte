'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Screen26() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className='px-5 py-3 flex flex-col justify-center items-center relative bg-black h-screen'>
      <div className=" bg-gradient-to-r from-white via-white to-gray text-transparent bg-clip-text bg-300% text-center animate-gradient text-white mt-6 flex flex-col">
        <p className=' font-Inter text-sm leading-5 mb-1 animate-gradient'>We hope you enjoy <span className=' font-RecklessNueu font-medium italic'>Garden of Glow by Gifte</span> . This digital experience is brought to you by</p>
      </div>
      <div className=" flex items-center mt-2">
        <Image src="/icons/gifte.svg" width={68} height={32} alt='' quality={100} className=' mr-4' />
        <Image src="/icons/circles.svg" width={98} height={20} alt='' quality={100} />
      </div>
      <Link href="https://www.gifteflorist.com" className=" p-2.5 rounded-lg w-fit bg-white mt-5">
        <p className=' font-Inter text-sm leading-5 font-medium'>
          Visit Gifte
        </p>
      </Link>
      <div className=" text-white absolute text-center font-RecklessNueu text-[10px] bottom-5">
        2023 © Gifte
      </div>
    </div >
  )
}
