import React from 'react'
import Link from 'next/link'

function NavItem(props) {
    const { link, name } = props;
    // console.log(link, name)
    return (
        <li className='hover:text-gray-900 px-2 py-1 cursor-pointer'>
            <Link href={link}>{name}
                {/* {props.children} */}
            </Link>
        </li>
    )
}

export default NavItem
