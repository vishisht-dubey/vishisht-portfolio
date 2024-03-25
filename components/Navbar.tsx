import React from 'react'
import ThemeToggle from "./ThemeToggle"
import { Button } from './ui/button'

export default function Navbar() {
 
  return (
    <div className='flex justify-between border-b-2 border-gray-400 mt-2 w-[75%] h-[50px]'>
      <p className='flex items-center text-lg font-bold tracking-[3px] font-mono'>Vishisht Dubey</p>
      <div className='flex flex-row items-center'>
        <Button className='font-mono tracking-normal text-lg hover:font-semibold' onClick={()=>{window.open("/vishisht_resume.pdf",)}}>Resume</Button>
      <ThemeToggle /> 
      </div>
  
    </div>
  )
}
