import { React, useState, useEffect } from 'react'
import {
    UserAddIcon,
    PencilAltIcon,
    ChatAlt2Icon,
    SwitchHorizontalIcon,
    PhotographIcon

} from '@heroicons/react/outline'
import PostPublications from '../PostPublications'
import Button from '../Button'
import NavItems from './NavItems'
const SubNavbar = (props) => {
    // { console.log("propsfrom subNavbar :", props) }
    { console.log("publication from subNavbar :", props.publication) }
    // { console.log("publication from subNavbar :", props.publication[0].__typename) }
    // { console.log("publication from subNavbar :", props.publication[0].profile.stats.totalPosts) }
    const NavItems = [
        {
            name: 'Post',
            link: '/posts',
            number: '0'
        },
        {
            name: 'Comments',
            link: '/comments',
            number: '0'
        },
        {
            name: 'Mirrors',
            link: '/mirror',
            number: '0'
        },
        {
            name: 'Mirrors',
            link: '',
            number: '0'
        },
    ]

    const [subNavItems, setSubNavItems] = useState();
    // useEffect(() => {
    let items = [];
    // NavItems.forEach(navItems => {
    // let item = { name: { navItems.name } };
    // console.log("from l", navItems)
    // });
    // }, []);

    return (
        <div className='container '>
            <NavItems navItems={NavItems} >
                <PencilAltIcon className="h-6 w-6" stroke='purple' />
            </NavItems>
            <div className='flex gap-4 my-5'>
                <Button>
                    <PencilAltIcon className="h-6 w-6" stroke='purple' />
                    <strong className='border-1'>Posts</strong>
                    <span className='rounded-lg text-purple-500 px-1 bg-indigo-200'>{props.publication[0].profile.stats.totalPosts}</span>
                </Button>

                <button className='flex gap-1 items-center rounded-lg text-purple-500 hover:bg-purple-100 px-2'>
                    <PencilAltIcon className="h-6 w-6" />
                    <strong>Posts</strong>
                    <span className='rounded-lg text-purple-500 px-1 bg-indigo-200'>{props.publication[0].profile.stats.totalPosts}</span>
                </button>
                <button className='flex gap-1 items-center rounded-lg text-purple-500 hover:bg-purple-100 px-2'>
                    <ChatAlt2Icon className="h-6 w-6" />
                    <strong>Comments</strong>
                    <span className='rounded-lg text-purple-500 px-1 bg-indigo-200'>{props.publication[0].profile.stats.totalComments}</span>
                </button>
                <button className='flex gap-1 items-center rounded-lg text-purple-500 hover:bg-purple-100 px-2'>
                    <SwitchHorizontalIcon className="inline h-6 w-6 mr-1" />
                    <strong>Mirrors</strong>
                    <span className='rounded-lg text-purple-500 px-1 bg-indigo-200'>{props.publication[0].profile.stats.totalMirrors}</span>
                </button>
                <button className='flex gap-1 items-center rounded-lg text-purple-500 hover:bg-purple-100 px-2'>
                    <PhotographIcon className="inline h-6 w-6 mr-1" />
                    <strong>NFTs</strong>
                    <span className='rounded-lg text-purple-500 px-1 bg-indigo-200'>0</span>
                </button>
            </div>

            <div className='border-2 border-black-500 rounded-lg'>
                <PostPublications publications={props.publication} />
            </div>
        </div>
    )
}

export default SubNavbar
