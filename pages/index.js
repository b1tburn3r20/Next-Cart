import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>
        <Link href="/posts/post">Link to Post Page</Link>
      </h1>
    </main>
  )
}
