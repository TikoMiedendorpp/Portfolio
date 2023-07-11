import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-600 font-semibold italic'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Tiko Miedendorp de Bie</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a second year Computer Science student.</h2>
            <p className='text-gray-100 py-4 max-w-[700px]'>Currently pursuing a Bachelor's degree at the University of Twente. 
                Through my modules, I have developed a strong foundation in key programming languages and gained practical experience in software development. 
                The first year has equipped me with a solid understanding of CS principles and a passion for Cyber Security! 
            </p>
            <div>
            <Link to="projects" smooth={true} offset={-380} duration={500}><button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>View Projects
                <span className='hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/> 
                </span>
                </button>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Home