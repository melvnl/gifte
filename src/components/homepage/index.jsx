'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const phrases = [
  "Enter the",
  "Garden of Glow",
  "digital exhibition",
]

export default function Homepage() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=" bg-white flex flex-col h-screen justify-between relative ">
      <div className=" absolute -ml-[30px] left-1/2 top-[10px] w-[60px] h-[32px]">
        <Image src="/icons/gifte.png" alt='' width={60} height={32} />
      </div>
      <div className=" grid grid-cols-2 gap-3 ">
        <Image src="/images/home-img-1.png" alt='' width={720} height={1012} />
        <Image src="/images/home-img-2.png" alt='' width={720} height={1012} quality={100} />
      </div>
      <div ref={ref} className=" my-8 text-gray text-center">
        {
          phrases.map((phrase, index) => {
            return <div key={index} className={classNames(index === 1 ? "font-RecklessNueu" : "font-Inter ", "overflow-hidden mb-1")}>
              {index === 1 ? (
                <motion.h1 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-2xl'>
                  {phrase}
                </motion.h1>
              ) : (
                <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} className=' text-sm'>
                  {phrase}
                </motion.p>
              )}
            </div>
          })
        }
      </div>
      <div className=" grid grid-cols-2 gap-3">
        <Image src="/images/home-img-3.png" alt='' width={720} height={1012} quality={100} />
        <Image src="/images/home-img-4.png" alt='' width={720} height={1012} quality={100} />
      </div>
      <div className=" font-Inter absolute bottom-0 items-center left-1/2 text-gray">
        <p className=' -ml-12 mb-6'>Scroll to enter</p>
        <Image src="/icons/arrow.svg" alt='' width={14} height={0} className='animate-bounce ' />
      </div>
    </div >
  )
}
