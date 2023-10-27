import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'





export default function nujabesMusic(){

    const [music, setMusic] = useState(false)


    function showMusic(){
        setMusic(!music)
    }

    return(
        <main id='background'>
            <Image
            src="/restinbeatsblack.png"
            width={300}
            height={300}
            />
            <h1>music</h1>

            <button onClick={showMusic}>My favorite Nujabes music</button>
            {music && (<div>Music</div>) }
        </main>
    )
}