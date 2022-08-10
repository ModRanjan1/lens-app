import React from 'react'
import NavItem from './NavItem';

function NavItems(props) {
    const { navItems } = props;
    console.log(navItems)
    return (
        <ul className='flex gap-4 text-base text-gray-500 font-medium '>
            {navItems.map((navItem) => (
                <NavItem
                    key={navItem.name}
                    link={navItem.link}
                    name={navItem.name}
                >
                    {props.children}</NavItem>
            ))}
        </ul>
    )
}

export default NavItems
