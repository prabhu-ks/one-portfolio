import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20' >
        Dynamic Data Science and DevOps Engineer with expertise in building and optimizing CI/CD pipelines and cloud infrastructure using Docker, Kubernetes, AWS, and Terraform. Proven ability to integrate DevOps practices within data science workflows to enhance operational efficiencies, accelerate deployment cycles, and improve scalability
        </p>

        <br />
      </div>
    </div>
  )
}

export default About