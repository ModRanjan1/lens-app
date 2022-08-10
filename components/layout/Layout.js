import React, { Fragment } from 'react'
import Link from 'next/link'

import NavBar from '../nav-bar/NavBar';
function Layout(props) {
    return (
        <Fragment>
            <header className='nav-bar border-b'>
                <NavBar />
            </header>

            <main className='container justify-center mx-auto'>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
