import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header
    className='w-full'
    >
       <div
       className='wrapper flex flex-between items-center'
       >
        <Image 
        src="/assets/ps5.png"
        width={140}
        height={80}
        alt='logo'
        />
        
        <div
        className='md:flex-between max-w-xs w-full hidden'
        >
            <NavItems />
        </div>

        <div
        className='flex justify-end w-34'
        >
            <Link
            href="/"
            >
                <Button
                className="bg-blue-700/80 p-medium-16 shadow-blue-500/50 shadow-md hover:bg-blue-500 rounded-lg" size="lg"
                >
                    Sign In
                </Button>
            </Link>
        </div>

       </div>
    </header>
  )
}

export default Header

