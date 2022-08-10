import Button from '../components/Button';
import Features from '../components/Features'
import Hero from '../components/Hero';

import Layout from '../components/layout/Layout';
import RecommendedProfiles from '../components/RecommendedProfiles';
import {
  LightningBoltIcon
} from '@heroicons/react/solid'

export default function Home() {


  return (
    <>
      <Hero />
      <section className='grid md:grid-cols-3 mt-10 px-4 gap-6'>
        <div className='col-span-2 border-1 p-4'>
          <div className='flex flex-col'>
            <div className='flex justify-between w-100%'>
              <div className='bg-grey-200'>
                <h1> card header</h1>
              </div>

            </div>

          </div>
        </div>
        <aside className='invisible md:visible h-70 min-h-min max-h-max'>
          <h3 className='text-lg pb-1'>
            <LightningBoltIcon className="inline h-10 w-5 text-yellow-500 mr-1" />
            Recommended users
          </h3>
          <div className='border-1 px-4 py-4 h-1/5 overflow-hidden overflow-y-auto' >
            <RecommendedProfiles />
          </div>
        </aside>

      </section>
    </>
  );
}
