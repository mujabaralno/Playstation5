import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const JoyStick = () => {
  return (
    <section
    className='w-full md:mt-[20vh] mt-[10vh] 0'
    >
      <div
      className='wrapper-hero justify-center items-center flex flex-col mt-10'
      >
            <h1 className='h1-bold text-center '>
            The DualSense wireless controller<span className='text-blue-700/80'>.</span>
            </h1>
            <Image 
            src="/assets/joysti.png"
            width={600}
            height={500}
            className='object-contain z-0'
            />
        </div>
        <div className="wrapper grid grid-cols-1 gap-11 md:grid-cols-2 2xl:gap-10">
            <Image 
            src="/assets/joy.png"
            width={600}
            height={1000}
            className='object-contain z-0 mt-[20px]'
            />
          <div className="flex flex-col justify-center gap-7">
            <h1 className="h1-bold text-black">Adaptive Triggers<span className='text-blue-700/80'>.</span></h1>
            <p className="p-medium-14 md:p-medium-20 text-[#3c3434]">Dynamic resistance mimics the tension of interactions with in‑game gear and objects in select PS5™ games..</p>
            <div
            className='flex flex-col md:flex-row gap-5 md:gap-[6rem] justify-start items-center'
            >
                <p className='h4-medium'>
                <span className='p-medium-24 gap-1'>$</span>68.99
                </p>
                <Button size="lg" className="rounded-lg w-fit bg-blue-700/80 p-medium-16 shadow-blue-500/50 shadow-xl hover:bg-blue-500">
                <Link href="/">
                    Buy Now
                </Link>
                </Button>
            </div>
          </div>

          
        </div>
    </section>
  )
}

export default JoyStick
