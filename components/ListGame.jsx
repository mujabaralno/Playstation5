'use client'

import React from 'react'
import Atropos from 'atropos/react'
import { gameList } from '@/constants'
import 'atropos/css'
import { list } from 'postcss'
import Image from 'next/image'
import { Button } from './ui/button'

const ListGame = () => {
  return (
    <div className='mx-auto px-4 md:px-6 text-lg text-center py-16'>
    <div className='flex flex-wrap justify-center'>
        <ul className='wrapper-hero grid grid-cols-1 gap-11 md:grid-cols-3 2xl:gap-[5rem]'>
        {gameList.map((items) => {
          return (
              <li
              key={items.imgUrl1}
              className='game-box flex flex-col items-center'
              >
                  <Atropos
                  activeOffset={40}
                  shadowScale={0.9}
                  onEnter={() => console.log('Enter')}
                  onLeave={() => console.log('Leave')}
                  onRotate={(x, y) => console.log('Rotate', x, y)}
                  >
                              <div className='atropos-scale'>
                                <div className='atropos-rotate'>
                                  <div className='atropos-inner'>
                                    <Image 
                                    data-atropos-offset="0"
                                    width={1000}
                                    height={100}
                                    className='game-box-size'
                                    src={items.imgUrl1}
                                    />
                                    <Image 
                                    data-atropos-offset="0"
                                    width={1000}
                                    height={100}
                                    className='game-box-bg'
                                    src={items.imgUrl2}
                                    /><Image 
                                    data-atropos-offset="1"
                                    width={1000}
                                    height={100}
                                    className='game-box-logo'
                                    src={items.imgUrl3}
                                    /><Image 
                                    data-atropos-offset="2"
                                    width={1000}
                                    height={100}
                                    src={items.imgUrl4}
                                    /><Image 
                                    data-atropos-offset="3"
                                    width={1000}
                                    height={100}
                                    className='game-box-studio'
                                    src={items.imgUrl5}
                                    />
                                  </div>
                                  
                                </div>
                              </div>
                              <span class="atropos-highlight"></span>
                  </Atropos>
                  <Button  className="rounded-lg sm:w-fit bg-blue-700/80 p-medium-16 shadow-blue-500/50 shadow-xl hover:bg-blue-500 mt-3">
                    Learn More
                  </Button>
              </li>
          )
        })}
      </ul>
        </div>
    </div>
  )
}

export default ListGame
