import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import UserAvtar from './UserAvtar';
import {
    UserAddIcon
} from '@heroicons/react/outline'
import {
    LightningBoltIcon
} from '@heroicons/react/solid'

import { client, RECOMMENDED_PROFILES } from '../API';

const RecommendedProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles();
    }, []);

    async function fetchProfiles() {
        try {
            const response = await client.query(RECOMMENDED_PROFILES).toPromise();
            console.log(response);

            setProfiles(response.data.recommendedProfiles);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {profiles.map((profile, index) => {
                // { console.log(profile); }
                return (
                    <div key={index} className="sm:flex sm:items-center gap-3 max-w-sm mx-auto bg-white rounded-lg hover:shadow-lg py-4 sm:py-2 ">
                        {
                            profile.picture && profile.picture.original ? (
                                <UserAvtar
                                    profileId={profile.id}
                                    profileImgUrl={profile.picture.original.url} />
                            ) : (
                                <UserAvtar
                                    profileId={profile.id}
                                    isProfileImg="" />
                            )}

                        <div className="flex flex-col h-full grow ">
                            <Link href={`/profile/${profile.id}`}>
                                <a className='flex grow flex-col justify-between gap-0.5'>
                                    <strong className='text-lg text-black font-semibold'>@{profile.name}</strong>
                                    <span className='text-purple-500 font-medium'>@{profile.handle}</span>
                                </a>
                            </Link>

                        </div>
                        <Button >
                            <span className="px-5 py-2 text-green-600 rounded-full border-2 border-green-200 hover:text-white hover:bg-green-500 hover:border-transparent focus:ring-green-600">
                                <UserAddIcon
                                    width="24"
                                    height="24" />
                            </span>
                        </Button>
                    </div>
                )
            })
            }
        </>
    )
}

export default RecommendedProfiles
