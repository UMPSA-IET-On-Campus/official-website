import React from 'react';
import Link from 'next/link';


const Stats: React.FC = () => {
  // Your component logic here

  return (
        
       <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8" id="the-iet">
       <div className="mx-auto max-w-2xl lg:mx-0">
         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
         <Link href="https://www.theiet.org/" target='_blank'>Meet the IET Global Community</Link>
         </h2>
         <p className="mt-6 text-base leading-7 text-gray-600">
         Explore the dynamic world of IET Global—a global community driving innovation in engineering and technology. Connect with professionals, access cutting-edge knowledge, and be part of a collaborative force shaping the future of technology globally.
         </p>
       </div>
       <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
         <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
           <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">146</p>
           <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
             <p className="text-lg font-semibold tracking-tight text-gray-900">Countries</p>
             <p className="mt-2 text-base leading-7 text-gray-600">
             are connected through the global network of the Institution of Engineering and Technology (IET).             </p>
           </div>
         </div>
         <Link href="https://www.theiet.org/career/routes-to-engineering/student-hub/on-campus/find-your-universitys-on-campus-group/" target='_blank'  className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
    

           <p className="flex-none text-3xl font-bold tracking-tight text-white">86 </p>
           <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
             <p className="text-lg font-semibold tracking-tight text-white">
             IET on Campus  
             </p>
             <p className="mt-2 text-base leading-7 text-gray-400">
             chapters worldwide inspire and support students in engineering and technology, fostering collaboration and professional development.
             </p>
           </div>       
         </Link>
         <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
           <p className="flex-none text-3xl font-bold tracking-tight text-white">154,000</p>
           <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
             <p className="text-lg font-semibold tracking-tight text-white">Engineering and technology professionals</p>
             <p className="mt-2 text-base leading-7 text-indigo-200">
             worldwide form the dedicated and diverse community within the Institution of Engineering and Technology (IET).             </p>
           </div>
         </div>
       </div>
     </div>
  );
};

export default Stats;
