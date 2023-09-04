'use client'
import { useRef, useEffect, useCallback, useState } from 'react';
import styles from './homepage2.module.css'
import Image from 'next/image';
import classNames from 'classnames';
import { useGlobalState } from '@/context/GlobalStateProvider';

export default function Home() {

  const [colorChange, setColorChange] = useState(false);
  const { setState } = useGlobalState();

  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .2;
  const targetMaskSize = 1;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const getScrollProgress = useCallback(
    () => {
      if (container.current && stickyMask.current) { // Check if elements are available
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
      }
      return 0;
    },
    [],
  )

  const animate = useCallback(() => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    }

    console.log("maskSizeProgress", maskSizeProgress)
    setColorChange(false);
    if (maskSizeProgress >= 0.45) {
      setColorChange(true);
    }

    if (maskSizeProgress >= 0.7) {
      setState((prev) => ({
        ...prev,
        hasPassedDoor: true
      }));
      console.log("Mask fully covers the screen");
    }
    requestAnimationFrame(animate)
  }, [getScrollProgress, setState])

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [animate])

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div className={classNames(colorChange ? "text-black" : "text-white", "w-fit sticky z-50 mx-auto left-1/3 top-[250px] transition-transform delay-300 ")}>Keep scrolling to enter</div>
        <div ref={stickyMask} className={styles.stickyMask}>
          <Image src="/images/flower.png" width={425} height={755} alt='' className=' w-full max-w-[425px] object-cover' />
        </div>
      </div>
    </main >
  )
}
