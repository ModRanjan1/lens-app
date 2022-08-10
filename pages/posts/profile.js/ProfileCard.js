import React from 'react'

function ProfileCard() {
    return (
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl hover:shadow-lg  sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-3">
            <img className="block mx-auto h-20 w-20 rounded-full sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Woman's Face" />
            <div className="flex align-center text-center  sm:text-left">
                <div className="flex flex-col h-full space-y-3 grow space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        Erin Lindford
                    </p>
                    <p className="text-slate-500 font-medium">
                        Product Engineer
                    </p>
                </div>
                <Button ><span className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Message</span></Button>
            </div>
        </div>
    )
}

export default ProfileCard
