'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

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
    <div className='px-5 py-3'>
      <Header />
      <div className=" text-[#6D6D6D] mt-6 flex justify-center">
        <p className=' text-xs'>A Digital Experience by</p>
        <h1 className=' text-2xl font-extrabold'>Gifte & Circles</h1>
      </div>
    </div >
  )
}
