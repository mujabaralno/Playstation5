import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { descripionPS } from '@/constants'
import VideoCarousel from './VideoCarousel'

const Hero = () => {
  return (
    <>
    <section className="w-full py-5 md:py-7">
        <div className="wrapper-hero grid grid-cols-1 gap-11 md:grid-cols-2 2xl:gap-7">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-black">Play Has No Limit<span className='text-blue-700/80'>.</span></h1>
            <p className="p-medium-14 md:p-medium-24 text-[#3c3434]">Marvel at incredible graphics and experience new PS5 features.</p>
            <div
            className='flex flex-col md:flex-row gap-5 md:gap-[6rem] justify-start items-center'
            >
                <p className='h4-medium'>
                <span className='p-medium-24 gap-1'>$</span>499.99
                </p>
                <Button size="lg" asChild className="rounded-lg w-fit bg-blue-700/80 p-medium-16 shadow-blue-500/50 shadow-xl hover:bg-blue-500">
                <Link href="/">
                    Buy Now
                </Link>
                </Button>
            </div>
          </div>

          <Image 
            src="/assets/ps5hero.png"
            alt="hero"
            width={10000}
            height={1000}
            className="max-h-[60vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section className='w-full py-5 md:py-7'>
        <ul
        className='wrapper-hero grid grid-cols-2  gap-4 md:grid-cols-4 2xl:gap-0'
        >
          {descripionPS.map((items) => {
            return (
              <div
               className='flex flex-col gap-1 text-center  p-1'
              >
               <h4 className='p-bold-24'>{items.label}</h4>
               <p className='p-regular-12 md:p-medium-16'>{items.desk}</p>
            </div>
            )
          })}
        </ul>
      </section>

      <VideoCarousel />
    </>
  )
}

export default Hero
