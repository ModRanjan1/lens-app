import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const UserAvtar = (props) => {
    const isProfileImg = props.isProfileImg;
    const profileImgUrl = props.profileImgUrl;
    const profileId = props.profileId
    console.log(profileImgUrl)

    if (profileImgUrl) {
        return (
            <Link href={`/profile/${profileId}`}>
                <Image
                    layout="fixed"
                    src={profileImgUrl}
                    width="52px"
                    height="52px"
                    alt="Profile Picture"
                    className='block mx-auto border-2 rounded-full sm:mx-0 '
                />
            </Link>
        )
    }

    if (isProfileImg) {
        return (
            <Link href={`/profile/${props.profileId}`}>
                <div
                    className='block mx-auto h-20 w-20 rounded-full sm:mx-0 sm:shrink-0 bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    style={{ width: "50px", height: "50px" }}
                />
            </Link>
        )
    }

    return (
        <Link href={`/profile/${props.profileId}`}>
            <div
                className='block mx-auto h-20 w-20 rounded-full sm:mx-0 sm:shrink-0 bg-gradient-to-r from-violet-500 to-fuchsia-500'
                style={{ width: "50px", height: "50px" }}
            />
        </Link>

    )
}

export default UserAvtar
