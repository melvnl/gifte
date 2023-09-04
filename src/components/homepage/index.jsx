'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "Enter the",
  "[Collection Name]",
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
      <div className=" flex justify-between">
        <Image src="/images/home-img-1.png" alt='' width={180} height={253} />
        <Image src="/images/home-img-2.png" alt='' width={180} height={253} />
      </div>
      <div ref={ref} className=" my-8 text-gray text-center">
        {
          phrases.map((phrase, index) => {
            return <div key={index} className="overflow-hidden">
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
      <div className=" flex justify-between">
        <Image src="/images/home-img-3.png" alt='' width={180} height={253} />
        <Image src="/images/home-img-4.png" alt='' width={180} height={253} />
      </div>
      <div className=" absolute bottom-0 items-center left-1/2 text-gray">
        <p className=' -ml-12 mb-6'>Scroll to enter</p>
        <Image src="/icons/arrow.svg" alt='' width={14} height={0} className='animate-bounce -mb-4 ' />
      </div>
    </div >
  )
}
