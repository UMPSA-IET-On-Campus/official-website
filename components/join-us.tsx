import React from 'react';
import Image from 'next/image';

const preferredPositions = [
    {
      id: 1,
      role: 'HR - Members Management',
      description: 'Coordinate and manage members, fostering a positive and inclusive community environment.',
    },
    {
      id: 2,
      role: 'ACTIVIST - Event Research',
      href: '#',
      description: 'Research and identify impactful events to be organized, contributing to community engagement.',
    },
    {
      id: 3,
      role: 'LOGISTIC - Transportation and FnB',
      description: 'Efficiently manage transportation logistics and oversee Food and Beverage arrangements.',
    },
    {
      id: 4,
      role: 'MULTIMEDIA - Social Media Management',
      description: 'Create visually appealing posters and actively manage social media platforms for effective communication.',
    },
    {
      id: 5,
      role: 'SPONSORSHIP - Network and Sponsor Relations',
      description: 'Build a strong network, secure sponsors, and foster relationships for successful collaborations.',
    },
  ];
  
  // Use preferredPositions in your application as needed
  

const JoinUs: React.FC = () => {
  // Your component logic here

  return (
        
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" id="join-us">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We’re looking for awesome people to join us
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Discover exciting opportunities to join IET UMPSA as we seek awesome individuals passionate about engineering and technology to contribute to our dynamic community.
              </p>
              <Image 
              width={1000}
              height={1000}
                src="/community/iet-umpsa.jpg"
                alt="IET UMPSA"
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {preferredPositions.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                          {opening.role}
                       
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                     
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScIQoGGiSN9ZbHfUYihrUzauOxXT3Psg_alyK419SX2k83nUw/viewform" target="_blank"  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                 Apply Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
  );
};

export default JoinUs;
