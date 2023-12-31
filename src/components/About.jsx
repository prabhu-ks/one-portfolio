import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20' >
          As a Master of Science in Information Systems student at Northeastern University, I aspire to leverage data to drive strategic decision-making and create impactful solutions. With a strong background in information systems and a passion for data analysis and machine learning, I possess the knowledge and expertise to tackle complex data challenges and deliver valuable insights.

        </p>

        <br />
      </div>
    </div>
  )
}

export default About