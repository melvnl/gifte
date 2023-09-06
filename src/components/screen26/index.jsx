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
      <div className=" bg-gradient-to-r from-white via-white to-gray text-transparent bg-clip-text bg-300% animate-gradient text-[#6D6D6D] mt-6 flex flex-col">
        <p className=' font-Inter text-sm leading-5 font-medium mb-1 animate-gradient'>A Digital Experience by</p>
        <h1 className=' font-RecklessNueu text-[22px] font-medium animate-gradient2'>Gifte & <a href="https://www.circlescreative.co">Circles</a></h1>
      </div>
      <Link href="https://www.gifteflorist.com" className=" p-2.5 rounded-lg w-fit bg-white mt-5">
        <p className=' font-Inter text-sm leading-5 font-medium'>
          Visit Gifte
        </p>
      </Link>
      <div className=" text-white absolute text-center bottom-5">
        <p className=' font-RecklessNueu leading-[14px] text-[10px] font-medium mb-1'>2023 © Gifte</p>
        <div className=" flex items-center">
          <h1 className='leading-[14px] text-[10px] font-medium'>Website by
          </h1>
          <Link href="https://www.circlescreative.co" className=" ml-1">
            <Image src="/icons/circles.svg" width={48} height={10} alt='' />
          </Link>
        </div>
      </div>
    </div >
  )
}
