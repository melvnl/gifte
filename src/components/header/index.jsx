import React from 'react'
import MobileMenu from '../MobileHeader'
import classNames from 'classnames'

export default function Header({ title = "Garden of Glow", subtitle = "An experience by Gifte & Circles", transparent = false }) {
  console.log("transparent", transparent)
  return (
    <div className={classNames(transparent ? "bg-transparent px-5 py-3 " : "bg-white shadow-lg px-5 py-3 ", "w-full flex justify-between  ")}>
      <div className=" mr-auto">
        <h1 className='font-RecklessNueu text-sm font-medium leading-5 ' > {title}</h1>
        <p className=' font-Inter text-xs text-[#6D6D6D] font-medium leading-4'>{subtitle}</p>
      </div>
      <MobileMenu />
    </div>
  )
}
