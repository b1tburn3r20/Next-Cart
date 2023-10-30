import Link from "next/link"
import { useState } from "react"


export default function(){

    const [choreDropDown, setChoreDropDown] = useState(false)

    function showChoreCreateDropDown(){
        setChoreDropDown(!choreDropDown)
    }

    return (
        <main>
            <div className="max-w-xs bg-gray-950 border-2 rounded-md border-gray-800 font-thin">
                
                <div className="flex justify-between ml-4 mr-4 mt-2">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/profile">Profile</Link>
                    </div>
                </div>
                </div>
            
        </main>
    )
}