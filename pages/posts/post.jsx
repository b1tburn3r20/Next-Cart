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
                <div>
                    <p>Want to create a chore listing?</p>
                    <button onClick={showChoreCreateDropDown} className="bg-white rounded-full p-2 text-black" id="chore-drop-down-button">Create Chore Listing</button>
                </div>
                {choreDropDown && (
                    <div>
                        <input type="text" placeholder="Enter chore name.."/>
                        <button id="add-chore-button">Add Chore</button>
                    </div>
                )}
                <div className="flex justify-center">
                    <h1 className="mt-5 mb-5">Active Chores</h1>
                    <div id="chore-bounties"></div>
                </div>
                
            </div>
            
        </main>
    )
}