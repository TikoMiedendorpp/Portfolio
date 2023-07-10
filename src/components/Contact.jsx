import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaYoutube} from 'react-icons/fa';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 mt-20'>
       {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
            <p className='py-4 text-gray-300'>Send me a message on LinkedIn or Instagram!</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <a className='flex justify-between items-center w-full text-gray-300 w-20 mx-auto hover:scale-110 duration-500'
                    href="https://www.linkedin.com/in/tiko-miedendorp-de-bie-0ba113273/">
                        <FaLinkedin size={80} />
                    </a>
            <a className='flex justify-between items-center w-full text-gray-300 w-20 mx-auto hover:scale-110 duration-500'
                    href="https://www.instagram.com/tikomiedendorp/">
                        <FaInstagram size={80} />
                    </a>

        </div>
        </div>
        </div>
  )
}

export default Contact