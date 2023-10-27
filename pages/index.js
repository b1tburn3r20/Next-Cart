import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='font-thin'>
      <div className="max-w-sm border-2 rounded-md border-neutral-800 p-2">
      <p className='flex justify-end p-2 '>
        <Link  className='bg-neutral-800 rounded-full p-2 font-thin' href="/posts/post">Active Chores</Link>
      </p>
      <header className='flex justify-center font-thin text-3xl border-neutral-800 border-2 p-2 rounded-full'>Rent-Rocket!</header>
      <div className='image-container flex justify-center'>
      <Image className='p-4'
      src="/rocket3.png"
      alt='black-rocket'
      width={300}
      height={300}
      />
      </div>
      <div>Current Rent Due: $<span id='current-rent'>250</span></div>
      </div>
     
    </main>
  )
}
