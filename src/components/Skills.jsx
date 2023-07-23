import React from 'react'
import CSS from '../assets/css.png';
import GitHub from '../assets/github.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import Kali from '../assets/kali.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300 sm: mb-80 mb-60'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full bg-[#0a192f]'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with so far</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#e44d26] rounded-lg hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#0277bd] rounded-lg hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#ffd600] rounded-lg hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JavaScript icon" className='w-20 mx-auto' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#00d8ff] rounded-lg hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="React icon" className='w-20 mx-auto' />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#eeeeee] rounded-lg hover:scale-110 duration-500'>
                    <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto' />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#44a8b3] rounded-lg hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto' />
                    <p className='my-4'>TAILWIND</p>
                </div>
                 <div className='shadow-md shadow-[#cb2d2e] rounded-lg hover:scale-110 duration-500'>
                    <img src={Java} alt="Java icon" className='w-20 mx-auto' />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#ffd343] rounded-lg hover:scale-110 duration-500'>
                    <img src={Python} alt="Python icon" className='w-20 mx-auto' />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#2278FF] rounded-lg hover:scale-110 duration-500'>
                    <img src={Kali} alt="kali icon" className='w-20 mx-auto' />
                    <p className='my-4'>KALI LINUX</p>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Skills