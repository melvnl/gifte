import React from 'react'

export default function Header({ title = "[Collection Name]", subtitle = "An experience by Gifte & Circles" }) {
  return (
    <div>
      <h1 className=' text-xs font-medium'>{title}</h1>
      <p className=' text-[10px] text-[#6D6D6D] font-medium'>{title}</p>
    </div>
  )
}
