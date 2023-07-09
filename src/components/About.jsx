import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600'>About</p>
                </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-semibold italic'>
                    <p>Hi. I'm Tiko, nice to meet you! Please take a look around 🇳🇱</p>
                </div>
                <div>
                    <p>
                        As an 18 year old Dutch student, I am deeply engaged in expanding my knowledge and skills in this dynamic field.
                        By collaborating with fellow students, I have actively participated in challenging projects that have enhanced my 
                        ability to work effectively within a team. As for now, my interests mostly go towards Cyber Security and Artificial Intelligence!

                    </p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default About