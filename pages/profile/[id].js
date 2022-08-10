import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { client, GET_PROFILE_BY_ID, GET_PUBLICATIONS } from '../../API';
import {
  UserAddIcon,
  PencilAltIcon,
  ChatAlt2Icon,
  SwitchHorizontalIcon,
  PhotographIcon

} from '@heroicons/react/outline'
import SubNavbar from '../../components/nav-bar/SubNavbar';
const address = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'


export default function Profile() {

  const [profile, setProfile] = useState();
  const [publications, setPublications] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      fetchProfileById();
    }
  }, [id]);


  async function fetchProfileById() {
    try {
      const response = await client.query(GET_PROFILE_BY_ID, { id }).toPromise();

      const publicationData = await client.query(GET_PUBLICATIONS, { id }).toPromise();

      // console.log('respose :', response);
      // console.log('publicationData :', publicationData);

      setProfile(response.data.profiles.items[0]);

      setPublications(publicationData.data.publications.items)
    } catch (err) {
      console.log(err);
    }
  }
  if (!profile) return null;

  return (
    <>
      {profile.coverPicture && profile.coverPicture.original ? (
        <span className='cover-img '>
          <Image
            layout="responsive"
            width='1280px'
            height='500px'
            src={profile.coverPicture.original.url}
            alt="coverPicture"
            className='w-full aspect-video'
          />
        </span>
      ) : (
        <div
          className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-52' />
      )}

      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-5'>
        <div className='border-2 h-auto sm:h-50'></div>
        <div className='md:col-span-2 border-2  h-auto sm:h-50'>
          <SubNavbar publication={publications} />
        </div>
      </div>
    </>
  );
}

/*
<div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-5 pl-2'>
        <div className='relative md:items-start sm:align-center'>
          <div className='absolute -top-24 sm:left-25'>
            <div className='rounded-lg w-fit border-4 border-white'>
              {profile.picture && profile.picture.original ? (
                <Image
                  width='200px'
                  height='200px'
                  src={profile.picture.original.url}
                  alt="profilePicture"
                  className='rounded-lg'
                />
              ) : (
                <div
                  className='block rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 w-52 h-52' >

                </div>
              )}
            </div>

            <div className='flex flex-col gap-3 text-lg pl-2'>
              <h3 className='text-2xl font-bold text-black-500 '>{profile.name}</h3>
              <p className='text-purple-500' >@{profile.handle}</p>

              <div className='flex gap-5 text-center'>
                <div className='flex flex-col inline'>
                  <span className='text-grey-800'>{profile.stats.totalFollowers}</span>
                  <p className='text-slate-500'>Followers</p>
                </div>
                <div className='flex flex-col inline'>
                  <span className='text-grey-800'>{profile.stats.totalFollowing}</span>
                  <p className='text-slate-500'>Followings</p>
                </div>
              </div>

              <button className='border border-green-300 rounded-lg px-3 py-1 my-2 hover:bg-green-100 w-fit'>
                <UserAddIcon className="inline-block h-5 w-5 mr-2 text-green-300 hover:text-green-500" />
                <span className='text-green-400'>Follow</span>
              </button>

              <p className='text-[16px] pl-0 p-2'>{profile.bio}</p>

              <div className='border-y border-black-500'>
                <h1 className='my-3'># <span className='ml-2'>hello</span></h1>
              </div>
            </div>
          </div>
        </div>

        <div className='md:col-span-2 w-auto '>
          <SubNavbar publication={publications} />
        </div>
      </div>
*/