'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';

export default function Screen22() {

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
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src="/images/sign-up-flow-4.svg" width={292} height={520} alt='' quality={100} />
      </div>
    </div >
  )
}
