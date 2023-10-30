import Navbar from "@/components/Navbar/navbar"
import Head from "next/head"
import Image from 'next/image'
import { useRef } from "react"


export default function(){

    const goalsListRef = useRef(null)
    const inputRef = useRef(null)

    const addListItem = () => {
        const item = document.createElement('li')
        item.textContent=inputRef.current.value;
        goalsListRef.current.appendChild(item)
    }

    return (
        <main className="max-w-sm border rounded-lg">
            <Head>
                <title>Goals</title>
            </Head>
            <Navbar />
            <div className="flex justify-center">
            <Image 
            src="/goals.png"
            width={150}
            height={150}
            />
            </div>
            
            <input className="border p-1 pl-3 pr-3 m-3 rounded-full" type="text" ref={inputRef}/>
            <button className="border p-1 pr-3 pl-3 rounded-full" onClick={addListItem}>Add Item</button>
            <div  ref={goalsListRef} placeholder="type something">
            
            </div>
        </main>
    )
}