import Link from 'next/link'
import Image from 'next/image'


export default function nujabesMusic(){
    return(
        <main id='background'>
            <Image
            src="/restinbeatsblack.png"
            width={300}
            height={300}
            />
            <h1>music</h1>

            <button>My favorite Nujabes music</button>
        </main>
    )
}