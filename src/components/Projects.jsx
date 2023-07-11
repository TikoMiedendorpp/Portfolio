import React from 'react'
import Scuba from '../assets/Scuba.png';
import Calculator from '../assets/calculator.png';
import EarnIt from '../assets/EarnIt.png';
import Twitter from '../assets/twitter.png';
import Othello from '../assets/othello.png';

const Projects = () => {
  return (
    <div name='projects' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto pt-20 p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Projects</p>
            <p className='py-4'>My recent projects that I have worked on</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 sm:mt-10 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Twitter} alt="Twitter dashboard" className='w-20 mx-auto mt-3' />
                <p className='font-bold italic'>Twitter Dashboard</p>
                <p className='my-4 p-3 mx-5'>Project in Module 1 where we used a database about the World Cup 2014 and used the data to create a live twitter dashboard </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Calculator} alt="calculator" className='w-20 mx-auto mt-3' />
                <p className='font-bold italic'>Calculator</p>
                <p className='my-4 p-3 mx-5'>Exercise in Module 2 where we created the basic commands of a calculator that gets displayed in the terminal</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Othello} alt="Othello server" className='w-20 mx-auto mt-3' />
                <p className='font-bold italic'>Othello Server</p>
                <p className='my-4 p-3 mx-5'>Server in Module 2 where you can play Othello against someone else or one of the bots that we created</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Scuba} alt="Scuba chat" className='w-20 mx-auto mt-3' />
                <p className='font-bold italic'>Scuba Chat</p>
                <p className='my-4 p-3 mx-5'>Multi-hop ad-hoc chat application that uses emulated wireless sound communication among 4 nodes</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={EarnIt} alt="Earn it" className='w-20 mx-auto mt-3 mb-2' />
                <p className='font-bold italic'>Earn It Web Application</p>
                <p className='my-4 p-3 mx-5'>Web application for earnit.works that handles the administration and invoice generation for companies and students</p>
            </div>
        </div>



    </div>
</div>
  )
}

export default Projects