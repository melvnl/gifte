'use client'
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Homepage from '@/src/components/homepage';
import Homepage2 from '@/src/components/homepage2';
import Screen6 from '@/src/components/screen6';
import Screen7 from '@/src/components/screen7';
import Screen8 from '@/src/components/screen8';
import Screen9 from '@/src/components/screen9';
import Screen10 from '@/src/components/screen10';
import Screen11 from '@/src/components/screen11';
import Screen13 from '@/src/components/screen13';
import Screen15 from '@/src/components/screen15';
import Screen17 from '@/src/components/screen17';
import Screen19 from '@/src/components/screen19';
import Screen20 from '@/src/components/screen20';
import ProgressBar from '@/src/components/progressbar';
import Screen21 from '@/src/components/screen21';
import Screen22 from '@/src/components/screen22';
import Screen23 from '@/src/components/screen23';
import Screen24 from '@/src/components/screen24';
import Screen25 from '@/src/components/screen25';

const specialScreen = {
  21: {
    title: "Step 1",
    subtitle: "Sign up / log in to your account through our website at www.gifteflorist.com"
  },
  22: {
    title: "Step 2",
    subtitle: "Click the menu on the top left, click your name & go to your account page."
  },
  23: {
    title: "Step 3",
    subtitle: "Create a reminder to the lucky one who is going to receive this special collection."
  },
  24: {
    title: "Step 4",
    subtitle: "Screenshot and save the reminder creation success proof to show it to the booth PIC."
  },
  25: {
    title: "Step 5",
    subtitle: "Share your moment & experience on instagram story then tag @gifte.id & @__circlescreative and show it to the booth PIC to get your gift!"
  },

}

export default function Home() {

  const [visible, setVisible] = useState(6);
  const [isDelaying, setIsDelaying] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the callback once when the component comes into view
  });

  // Add an event listener for the wheel event
  useEffect(() => {
    const handleWheel = () => {
      // Check if we are currently delaying the change
      if (!isDelaying) {
        setIsDelaying(true);
        setTimeout(() => {
          // After 2 seconds, increment the visible value by 1
          if (visible === 0) {
            setVisible((prevVisible) => prevVisible + 6);
          }
          else if (visible === 20) {
            setVisible(0);
          }
          else {
            setVisible((prevVisible) => prevVisible + 1);
          }
          setIsDelaying(false); // Reset the delay flag
        }, 1000); // 2 seconds delay
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('wheel', handleWheel);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isDelaying, visible]);

  // console.log(visible);

  return (
    <div ref={ref}>
      <AnimatePresence mode='wait'>
        {/* {visible === 0 && <Homepage />} */}
        {/* {visible === 1 && <Homepage2 />} */}
        <Homepage2 />
        {/* {visible === 6 && <Screen6 />}
        {visible === 7 && <Screen7 />}
        {visible === 8 && <Screen8 />}
        {visible === 9 && <Screen9 />}
        {visible === 10 && <Screen10 />}
        {visible === 11 && <Screen11 />}
        {visible === 13 && <Screen13 />}
        {visible === 15 && <Screen15 />}
        {visible === 17 && <Screen17 />}
        {visible === 19 && <Screen19 />}
        {visible === 20 && <Screen20 />}
        {visible === 21 && <Screen21 />}
        {visible === 22 && <Screen22 />}
        {visible === 23 && <Screen23 />}
        {visible === 24 && <Screen24 />}
        {visible === 25 && <Screen25 />} */}
      </AnimatePresence>
      {/* {visible > 0 && <ProgressBar
        special={visible >= 21 && visible <= 25}
        title={visible >= 21 && visible <= 25 ? specialScreen[visible].title : ""}
        subtitle={visible >= 21 && visible <= 25 ? specialScreen[visible].subtitle : ""}
        progress={visible / 26}
      />} */}
    </div>
  )
}
