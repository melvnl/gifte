'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const phrares = [
  "Your visit is coming to an end.",
  "Enjoy it a little longer, scroll further and you’ll ",
  "get a chance to win a gift from us!",
]

export default function Screen19() {

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
      <div ref={ref} className="text-[#6D6D6D] text-center px-5 py-3">
        <div className=" mt-[238px]">
          {
            phrares.map((phrase, index) => {
              return <div key={index} className={classNames(index === 0 ? "font-RecklessNueu" : "font-Inter ", "overflow-hidden mb-1")}>
                {index === 0 ? (
                  <motion.h1 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' font-medium text-gray text-base'>
                    {phrase}
                  </motion.h1>
                ) : (
                  <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-[#6D6D6D] text-sm'>
                    {phrase}
                  </motion.p>
                )}
              </div>
            })
          }
        </div>
      </div>
    </div >
  )
}
