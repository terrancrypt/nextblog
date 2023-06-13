'use client'

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'


const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext);

    return (
        <div className='w-[45px] h-[24px] border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] flex justify-between items-center relative cursor-pointer'
        onClick={toggle}>
            <div className='text-sm'>🌙</div>
            <div className='text-sm'>🔆</div>
            <div className='absolute rounded-[50%] bg-[#53c28b] w-[20px] h-[20px]' style={mode === "dark" ? { right: '2px' } : { left: '2px' }}></div>
        </div>
    )
}

export default DarkModeToggle