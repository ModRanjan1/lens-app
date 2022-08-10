import React from 'react'
import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
        <div className={`${styles.bgImage} grid md:grid-cols-2 text-center md:text-left content-center border-b h-80 min-h-full`}>
            <div className="flex flex-col gap-3">
                <h1 className={`text-4xl text-black font-semibold tracking-wide px-2 md:px-4`}>
                    <p>
                        Welcome to
                        <a className='text-purple-600 hover:underline pl-2' href="https://docs.lens.xyz/docs/">Lenster</a>
                    </p>
                </h1>

                <p className={`font-medium text-slate-700 px-2 md:px-4`}>
                    Lenster is a decentralized, and permissionless social media app built with Lens Protocol 🌿
                </p>
            </div>
        </div>
    )
}

export default Hero
