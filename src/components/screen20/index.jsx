'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';

const phrares = [
  "Earn discount up to IDR 999.9999 ",
  "Thanks for visiting our exhibition, as a token of ",
  "our gratitude, earn a limited discount this ",
  "collection’s purchase by following the steps.",
]

export default function Screen20() {

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
      <div ref={ref} className="text-[#6D6D6D] text-center flex flex-col justify-center items-center mt-[238px]">
        {
          phrares.map((phrase, index) => {
            return <div key={index} className="overflow-hidden">
              {index === 1 ? (
                <motion.h1 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-base'>
                  {phrase}
                </motion.h1>
              ) : (
                <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-gray text-sm'>
                  {phrase}
                </motion.p>
              )}
            </div>
          })
        }
      </div>
    </React.Fragment >
  )
}
