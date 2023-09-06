'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalState } from '@/context/GlobalStateProvider';

export const collections = [
  {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  },
  {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  }, {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  }, {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  }, {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  }, {
    title: "Classic Bouquet",
    price: "IDR 999.999",
    img: "/images/flower.png",
    url: "https://www.google.com",
  },
]
export default function Screen24() {

  const bottomRef = useRef();
  const { setState } = useGlobalState();

  useEffect(() => {
    const options = {
      threshold: 1.0, // When the element is fully visible
    };

    const handleIntersection = (entries, observer) => {
      if (entries[0].isIntersecting) {
        // Element is visible, so you've reached the bottom of the page
        setState((prev) => ({
          ...prev,
          hasPassedCollection: true
        }));
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(bottomRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, [setState]);


  return (
    <div>
      <Header />
      <div className=" mt-6 flex flex-col justify-center px-5 py-3 pt-16">
        <div className=" text-center mb-3">
          <h1 className=' font-RecklessNueu text-[22px] text-gray leading-7 mb-1'>Shop the Collection</h1>
          <p className=' font-Inter text-sm text-[#4F4F4F] leading-5'>All flowers ready in fresh & artificial type</p>
        </div>
        <div className="">
          {collections.map((collection, index) => {
            return (
              <div key={index} className=" flex flex-col justify-center mb-3">
                <Link href={collection.url} className=" mx-auto cursor-pointer">
                  <Image width={328} height={320} src={collection.img} alt='' className=' mb-1' />
                  <h1 className=' text-left font-RecklessNueu font-semibold text-base leading-[22px] text-gray mb-1'>{collection.title}</h1>
                  <p className=' text-left font-Inter text-base leading-[22px] text-[#4F4F4F]'>{collection.price}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <div className=' mt-8' ref={bottomRef} />
      </div>
    </div >
  )
}
