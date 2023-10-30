import Link from 'next/link'

export default function Navbar(){
    return(
        <>
            <Link href="/nujabes/nujabesMusic">Nujabes Tribute</Link>
            <Link  className='bg-neutral-800 rounded-full p-2 font-thin' href="/posts/post">Active Chores</Link>
        </>
    )
}