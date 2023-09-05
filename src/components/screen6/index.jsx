'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const leftCol = [
  "This is still a placeholder text, basically a story of the collection and digital experience description. Step into a world where nature's poetry meets artistry. Our Botanical Elegance collection is not merely a bouquet of flowers; it is a living, breathing masterpiece that pays homage to the exquisite beauty of the natural world.",
  "Each petal, each leaf, and every delicate stem has been meticulously curated and crafted to resemble the timeless treasures found within the hallowed halls of a museum. Each petal, each leaf, and every delicate stem has been meticulously curated and crafted to resemble the timeless treasures found within the hallowed halls of a museum."
]

export default function Screen6() {

  const animation = {
    initial: { y: "100%" },
    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div className=' px-5 py-3'>
      <Header />
      <div ref={ref} className=" mt-[76px] flex flex-row justify-between gap-4">
        <div className=" w-full  text-gray ">
          <Typewriter
            words={leftCol}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={500000}
          />
        </div>
      </div>
    </div>
  )
}
