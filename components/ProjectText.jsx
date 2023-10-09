import React from 'react'

const ProjectText = ({heading, text}) => {
  return (
    <div className='flex flex-col space-y-[4px]' > 
        <h1 className='text-[#212121] neue-md  text-[20px] leading-[28px] tracking-[-0.03px] md:text-[24px] md:leadng-[32px] md:tracking-[-0.5px] ' > {heading} </h1>
        <p className='text-[#646464] neue-reg text-[16px] leading-[26px] md:text-[16px] md:leading-[28px] tracking-[-0.1px] ' > {text} </p>
    </div>
  )
}

export default ProjectText