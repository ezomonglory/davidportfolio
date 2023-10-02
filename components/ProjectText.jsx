import React from 'react'

const ProjectText = ({heading, text}) => {
  return (
    <div>
        <h1 className='text-black libre-reg text-[16px] leading-[24px] md:text-[18px] md:leadng-[28px] md:tracking-[-1.08px] ' > {heading} </h1>
        <p className='text-[#787878] text-[14px] leading-[24px] md:text-[18px] md:leading-[28px] md:tracking-[-0.18px] ' > {text} </p>
    </div>
  )
}

export default ProjectText