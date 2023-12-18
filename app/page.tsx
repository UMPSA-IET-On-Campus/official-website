'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Footer from '@/components/footer'
import OurCommunity from '@/components/our_community'
import Stats from '@/components/stat'
import JoinUs from '@/components/join-us'
import Link from 'next/link'



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      
      <Header />

      <main className="isolate" id="about">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
               Working to Engineer a Better World
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                Welcome to the Institution of Engineering and Technology (IET) on Campus at Universiti Malaysia Pahang Al-Sultan Abdullah. Originating from the UK, <Link href="https://www.theiet.org/" target='_blank' className='text-purple-700'>The IET</Link> is a global engineering community working towards engineering a better world. As part of this international network, our campus chapter is dedicated to advancing and promoting the fields of science, engineering, and technology. We aim to inspire, inform, and influence our local engineering community, supporting technology innovation to meet the needs of society. Join us as we connect with engineers around the world and contribute to the global engineering landscape!



                </p>
              </div>
              <Image
              width={500}
              height={200}
                src="/banner.jpg"
                alt=""
                className="mt-10  w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

      

       <OurCommunity />

 
      <Stats />
        
      <JoinUs />

    
      </main>
      
      <Footer />
     
    </div>
  )
}
