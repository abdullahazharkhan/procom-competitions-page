import React from 'react'
import Timer from '../Timer/Timer'

function Header() {
  return (
    <div className="md:sticky md:top-0">
      <Timer />
      <nav className='bg-slate-950 w-full flex items-center justify-center'>
        <div className='cursor-pointer'>
          <img src="/PLogoOutlined.jpg" alt="" height={150} width={150} />
        </div>
      </nav>
    </div>
  )
}

export default Header
