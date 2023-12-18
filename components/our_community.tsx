import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurCommunity: React.FC = () => {
  return (
    <div className="overflow-hidden" id="iet-malaysia">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-purple-900 sm:text-4xl">
              <Link href="https://www.facebook.com/TheIETMalaysia" target="_blank">
                The IET Malaysia Network
              </Link>
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              The IET Malaysia Local Network is a dynamic community of professionals and enthusiasts
              from various engineering disciplines. Committed to fostering collaboration and
              innovation, the network hosts events, seminars, and initiatives that promote lifelong
              learning and advance engineering excellence in Malaysia.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Through engaging forums and collaborative projects, the IET Malaysia Local Network
              provides a platform for members to broaden their knowledge, build meaningful
              connections, and contribute to the technological advancement of the region.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center lg:justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-full lg:w-auto lg:flex-none">
  <div className="max-h-[500px] w-full max-w-[15rem] lg:max-w-none rounded-2xl bg-gray-50 overflow-hidden">
    <Image
      height={1000}
      width={1000}
      src="/community/iet-malaysia-committees.jpg"
      alt="IET Malaysia Committees"
      layout="responsive"
    />
  </div>
</div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-full lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-full lg:w-auto">
                <div className="aspect-[4/3] w-full max-w-[28rem] lg:max-w-[20rem] rounded-2xl bg-gray-50 overflow-hidden">
                  <Image
                    height={1000}
                    width={1000}
                    src="/community/iet-young-professional.jpg"
                    alt="IET Young Professional"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex w-full lg:w-auto lg:flex-none">
                <div className="aspect-[7/5] w-full max-w-[37rem] lg:max-w-[20rem] rounded-2xl bg-gray-50 overflow-hidden">
                  <Image
                    height={1000}
                    width={1000}
                    src="/community/iet-malaysia.jpg"
                    alt="IET Malaysia"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="aspect-[4/3] w-full max-w-[24rem] lg:max-w-[20rem] rounded-2xl bg-gray-50 overflow-hidden">
                  <Image
                    height={1000}
                    width={1000}
                    src="/community/iet-malaysia-annual-dinner.jpg"
                    alt="IET Young Professional"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
