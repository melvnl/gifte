import React from 'react'
import MobileMenu from '../MobileHeader'

export default function Header({ title = "Garden of Glow", subtitle = "An experience by Gifte & Circles" }) {
  return (
    <div className=' flex justify-between relative px-5 py-3'>
      <div className="">
        <h1 className='font-RecklessNueu text-xs font-medium leading-4 ' > {title}</h1>
        <p className=' font-Inter text-[10px] text-[#6D6D6D] font-medium leading-[14px]'>{subtitle}</p>
      </div>
      <MobileMenu />
    </div>
  )
}
