import Link from "next/link"

export default function(){
    return (
        <main>
            <div className="max-w-xs bg-gray-950 border-2 rounded-md border-gray-800">
                <div className="flex justify-between ml-4 mr-4 mt-2">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/profile">Profile</Link>
                    </div>
                </div>
                <h1 className="mt-5 mb-5">Cart Listings</h1>
                
            </div>
            
        </main>
    )
}