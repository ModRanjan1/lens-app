import React from 'react'
import Link from 'next/link'
import UserAvtar from './UserAvtar'

const Posts = (props) => {
    // console.log("from Posts :", props.post.publication.profile)
    return (
        <div className='flex flex-col m-3 gap-2'>
            <div className='flex flex-row mb-3'>
                <div className='grow'>
                    <Link href={`/profile/${props.post.publication.profile.id}`}>
                        <a className='flex'>
                            <UserAvtar profile={props.post.publication.profile} />

                            <div className='flex inline-block flex-col justify-between ml-3 gap-1.5'>
                                <strong className='text-grey-50'>@{props.post.publication.profile.name}</strong>
                                <span className='text-purple-500'>@{props.post.publication.profile.handle}</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <span className='text-slate-500'>2 months ago</span>
                </div>
            </div>

            <div className='p-3 border border-grey-300 rounded-lg'>
                {props.post.publication.metadata.content}
            </div>
        </div>
    )
}

export default Posts
