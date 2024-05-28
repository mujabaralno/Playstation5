import React from 'react'
import ListGame from './ListGame'
import { Button } from './ui/button'

const Game = () => {
  return (
    <section className='w-full mt-10 p-7 '>
      <div
      className='wrapper-hero flex flex-col '
      >
        <h1 className="h1-bold text-center">
        Games<span className='h1-bold text-blue-700/80'>.</span>
        </h1>
        <ListGame />
      </div>
      <div
        className='flex justify-center items-center p-6'
        >
          <Button
          size="lg" className="rounded-lg w-fit bg-blue-700/80 p-medium-16 shadow-blue-500/50 shadow-xl hover:bg-blue-500"
          >
          More Games
          </Button>
        </div>
    </section>
  )
}

export default Game
