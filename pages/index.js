import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Come back down</title>
    </Head>
    <main className='font-thin'>
      <div className="max-w-sm border-2 rounded-md border-neutral-800 p-2">
       <Navbar /> 
      </div>
    </main>
    </>
  )
}
