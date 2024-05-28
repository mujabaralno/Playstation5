import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <Image 
        src="/assets/ps5.png"
        width={240}
        height={80}
        alt='logo'
        />
      </Link>

      <p>2024 PlayStation. All Rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
