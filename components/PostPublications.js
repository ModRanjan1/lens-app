import React from 'react'
import Posts from '../components/Posts';
import {
    HeartIcon,
    ChatAlt2Icon,
    SwitchHorizontalIcon,
    DotsHorizontalIcon

} from '@heroicons/react/outline'

const PostPublications = (props) => {
    // { console.log("publications from postpublication :", props) }
    return (
        <>
            <div className='item-center '>
                {props.publications.map((publication, index) => {
                    { console.log("publication :", publication); }
                    return (
                        <div className='border-b'>
                            <div key={index} className='flex items-center p-1'>
                                <Posts post={{ publication }} />
                            </div>

                            <div className='flex gap-4 my-2 pl-4'>
                                <button className='flex gap-1 items-center rounded-lg text-indigo-500 hover:bg-purple-100 px-2'>
                                    <ChatAlt2Icon className="h-10 w-5" />
                                    <span className='rounded-lg text-purple-500 px-1'>0</span>
                                </button>
                                <button className='flex gap-1 items-center rounded-lg text-purple-500 hover:bg-purple-100 px-2'>
                                    <SwitchHorizontalIcon className="inline h-10 w-5 mr-1" />
                                    <span className='rounded-lg text-purple-500 px-1'>0</span>
                                </button>
                                <button className='flex gap-1 items-center rounded-lg text-red-500 hover:bg-purple-100 px-2'>
                                    <HeartIcon className="inline h-10 w-5 mr-1" />
                                    <span className='rounded-lg text-purple-500 px-1'>0</span>
                                </button>
                                <button className='flex gap-1 items-center rounded-lg text-grey-500 hover:bg-purple-100 px-2'>
                                    <DotsHorizontalIcon className="inline h-10 w-5 mr-1" />
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default PostPublications
