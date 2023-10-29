import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function nujabesMusic(){

    const [music, setMusic] = useState(false)
    function showMusic(){
        setMusic(!music)
    }

    return(
        <main id='background' className='max-w-sm border-2 rounded-lg font-thin'>
            <div className='flex justify-between p-2'>
                <p><Link href="/">Home</Link></p>
                <p><Link href="/posts/post">Post</Link></p>
            </div>
            <div className='flex justify-center'>
            <Image
            src="/restinbeatsblack.png"
            width={300}
            height={300}
            className='p-2'
            />
            </div>
            
            <div className='flex flex-col justify-center'>
                <button className='font-bold border-2 pt-1 pb-1 pr-2 pl-2 rounded-full m-1' onClick={showMusic}>Listen</button>
                {music && (
                <>
                <div>Here are two of my favorite songs from the late Seba Jun</div>
                <div className='flex flex-col'>
                Nujabes & Clammbon, Imaginary Folklore, 2007
                <audio controls
                    src='/music/ImaginaryFolklore.mp3'
                ></audio>
                Nujabes & Shing02, LuvSic Part 5, 12 December 2012
                <audio controls
                    src='/music/LuvSic5.mp3'
                ></audio>
                </div>
                </>
            ) }
            </div>
            <div className='p-3'>
                <p >Why do I have a passsion for Nujabes?</p>
                <p>I found heard Nujabes from the best of my memory some time around 2014, however my first memory of actually recognizing Nujabes as an artist i've heard before must have been some time in 2016 during my mc-warz days. Not long after really getting into Nujabes's music I found out of his passing in 2010. I nearly wept, strange from someone I never knew, just liked their music. I had never felt that way about an artist, not until now.</p>
                <p>I played his music all the time, being a bit of an outcase and a troublemaker, I easily was disliked despite only wanting to make friends. Somehow nujabes' music just put me at ease. There was a level of peace that resonated deeply with me. One of the most iconic sample mixes he made Aurorian Dance, this was a perfect example. The drum and kick mixed with guitar just radiates a simple mindset that everything will be okay. No matter how bad it gets.</p>
                <p>Not long after enjoying his music and paying my respects any way I could, telling others about this great music guy. Always listing Nujabes in the top 5 artists in my opinion. I had really gotten my roots in. I wasnt trying to make Nujabes a staple in my heart, but it developed that way. I always came back to his music. Not neccessarily in times of stress or need, just because I liked it. It felt like it radiated the calm in my heart that I dont really show. I related to his music.</p>
                <p>My favorite song Nujabes put out was Imaginary Folklore, remixed from Clammbon. I had listened to it for so long not knowing the lyrics, and sometimes I felt like that is the true way to listen to music. Not understanding Japanese helped me relate to the emotion of the singer more than hearing her words, its a different language, a spoken one, still understood however not on a linguistic level. However eventually I caved and read the lyrics along while I listened to it. The lyrics of Clammbon were beautiful. The song tells of a raging typhoon passing through their city, but the typhoon is a metaphore I believe, as they consitently sing about change, change is coming, and they feel it. Change in the wind, the shimmering lights. She feels the change a little bit, a little bit. This song resonates deeply in myself. I always feel change is coming, I feel as if I can see it. But it never is here. One day it will come, I feel often as if im in a storm myself. That everyone around me is indoors telling me to get inside but I cant move. I dont want to move, because I think the storm is almost over, I feel it, a little bit.</p>
                <p>It is strange writing this out in my vscode. Everything is dark themed in my editor, my browser, my computer. I am currently listening to the same song, Imaginary Folklore, im 21 years old only, yet I feel like im writing my own autobiography reading it as an outsider years after my own passing. Its a strange feeling, the realization that one day you will be gone, only entirely once you have been forgotten. But that too, will come. If only there is a way to stop it, even then for how long.</p>
                <p>Nujabes' music really puts you at peace, maybe thats why so many like it, recently nujabes has been getting a lot more attention on social media, for a reason people are calling "I have no enemies" often paired with a manga adaptation of a samurai from I believe "Berserk" which is a brutal manga, one of the saddest I believe. I havent read it, im not sure if I should curse myself with that knowledge yet, perhaps one day.</p>
                <p>Long after Nujabes has gone, I will continue to remember him. His music is a peace in this world, his message of world peace is not lost on me. I will carry his torch in my work, may it no be music, but in any way possible.</p>
                <p>Rest In Peace, Seba Jun. February 7, 1974, Nishiazabu, Tokyo, Japan -  February 26, 2010, Shibuya City, Tokyo, Japan</p>
            </div>
        </main>
    )
}