import Image from 'next/image'
import React from 'react'

function SideMenu({menuState, setMenuState}) {
  return (
    <div className='flex justify-around font-vazir border-b-1 border-[#00000040] pb-[5px] lg:h-[195px] lg:pb-0 mt-3.5 lg:flex-col lg:w-2/6 lg:border-1 lg:border-[#00000040] lg:rounded-[10px] overflow-hidden'>
      <div onClick={() => setMenuState(1)} className={`relative flex items-center gap-x-2 cursor-pointer lg:border-b-1 border-[#00000033] py-5 px-3 ${menuState == 1 && 'lg:bg-[#28A74540]'}`}>
        {menuState == 1 && <div className='absolute w-25 h-0.5 bg-primary -bottom-1 lg:hidden'></div>}
        <Image src={`${menuState == 1 ? '/icons/profile.png' : '/icons/frame.png'}`} width={16} height={16} className='size-5 ' alt='profile' />
        <span className={`max-sm:text-[12px] ${menuState == 1 ? 'text-primary' : 'text-secondary'}`}>پروفایل</span>
      </div>
      <div onClick={() => setMenuState(2)} className={`relative flex items-center gap-x-2 cursor-pointer lg:border-b-1 border-[#00000033] py-5 px-3 ${menuState == 2 && 'lg:bg-[#28A74540]'}`}>
        {menuState == 2 && <div className='absolute w-25 h-0.5 bg-primary -bottom-1 lg:hidden'></div>}
        <Image src={`${menuState == 2 ? '/icons/sun-fog-active.png' : '/icons/sun-fog.png'}`} width={16} height={16} className='size-5' alt='profile' />
        <span className={`max-sm:text-[12px] ${menuState == 2 ? 'text-primary' : 'text-secondary'}`}>تور های من</span>
      </div>
      <div onClick={() => setMenuState(3)} className={`relative flex items-center gap-x-2 cursor-pointer py-5 px-3 ${menuState == 3 && 'lg:bg-[#28A74540]'}`}>
        {menuState == 3 && <div className='absolute w-25 h-0.5 bg-primary -bottom-1 lg:hidden'></div>}
        <Image src={`${menuState == 3 ? '/icons/convert-card-active.png' : '/icons/convert-card.png'}`} width={16} height={16} className='size-5' alt='profile' />
        <span className={`max-sm:text-[12px] ${menuState == 3 ? 'text-primary' : 'text-secondary'}`}>تراکنش ها</span>
      </div>
    </div>
  )
}

export default SideMenu