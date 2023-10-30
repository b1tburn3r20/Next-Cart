import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='flex justify-between items-center'>
            <Link className='border p-1 pl-3 pr-3 m-1 rounded-full'  href="/nujabes/nujabesMusic">Nujabes Tribute</Link>
            <Link  className='border p-1 pl-3 pr-3 m-1 rounded-full' href="/posts/post">Goals</Link>
            <Link className='border p-1 pl-3 pr-3 m-1 rounded-full' href="/">Home</Link>
        </div>
    )
}