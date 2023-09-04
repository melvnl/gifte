'use client'
import { useRef, useEffect, useCallback, useState } from 'react';
import styles from './homepage2.module.css'
import Image from 'next/image';
import classNames from 'classnames';

export default function Home() {

  const [colorChange, setColorChange] = useState(false);

  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .2;
  const targetMaskSize = 1;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const getScrollProgress = useCallback(
    () => {
      const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress
    },
    [],
  )

  const animate = useCallback(() => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";

    setColorChange(false);
    if (maskSizeProgress >= 0.45) {
      setColorChange(true);
    }

    if (maskSizeProgress >= 0.99) {
      //check state here
      console.log("Mask fully covers the screen");
    }
    requestAnimationFrame(animate)
  }, [getScrollProgress])

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
