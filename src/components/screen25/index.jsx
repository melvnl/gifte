'use client'
import { useRef, useEffect, useCallback, useState } from 'react';
import styles from './homepage2.module.css'
import Image from 'next/image';
import classNames from 'classnames';
import { useGlobalState } from '@/context/GlobalStateProvider';
import ProgressBar from '../progressbar';

export default function Screen25() {

  const [textVisible, setTextVisible] = useState(true);
  const { state, setState } = useGlobalState();

  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.85;
  const targetMaskSize = 0.1;
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

    if (maskSizeProgress >= 0.35) {
      setTextVisible(false);
    }

    if (maskSizeProgress >= 0.6) {
      setState((prev) => ({
        ...prev,
        hasPassedDoor: true
      }));
    }
    requestAnimationFrame(animate)
  }, [getScrollProgress, setState])

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [animate])

  return (
    <main className={classNames(state.hasPassedDoor && styles.main2, styles.main)}>
      <div ref={container} className={classNames(state.hasPassedDoor && styles.container2, styles.container)}>
        {textVisible && (<div className=" font-RecklessNueu w-fit sticky z-50 mx-auto left-1/4 top-[250px] transition-transform delay-300 flex flex-col items-center justify-center ">
          <div className="text-white text-lg">Keep scrolling to enter</div>
          <Image src="/icons/white-arrow.svg" alt='' width={12} height={0} className='animate-bounce text-white mt-4 ' />
        </div>)}

        <div ref={stickyMask} className={styles.stickyMask}>
          <Image src="/images/flower.png" width={425} height={755} alt='' className=' w-full max-w-[425px] object-cover' />
        </div>
      </div>
      {
        !textVisible && (
          <div className="">
            <div className=" text-white w-fit sticky z-100 mx-auto left-1/5 bottom-[120px] transition-transform delay-300 ">Scroll up to explore the exhibition</div>
            <ProgressBar
              special={false}
              isDoor={true}
              title=""
              subtitle=""
              progress={2 / 26}
            />
          </div>
        )
      }
    </main >
  )
}
