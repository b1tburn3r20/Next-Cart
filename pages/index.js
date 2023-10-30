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
      <div className="max-w-sm border rounded-md border-neutral-800 p-4">
       <Navbar /> 
       <div className='flex flex-col justify-center text-center items-center'>
       <Image
       className='mt-5 mb-5'
       src="/6589.png"
       width={150}
       height={150}
       />
       <p>Zna vz fb gverq bs jbexvat ng Jnyterraf. Gurerf ab ernfba V fubhyq fgvyy or qbvat gurfr fghcvq nff wbof. Vz qbar uhzvyvngvat zlfrys sbe $15.50 V arrq gb trg n wbo qbvat guvf. Gbb onq Ebobsybj qvqag jbex bhg.</p>
       </div>
       
      </div>
    </main>
    </>
  )
}
