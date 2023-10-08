import React from 'react'
import { Workdata } from '../data'
import { useRouter } from 'next/navigation'

const Work = () => {

    const router = useRouter()

  return (
    <div className='bg-[#F5F5F5] p-[16px] pb-[76px] md:py-[34px] md:px-[70px] mt-[-40px] grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[32px]  ' 

    >

    {
        Workdata.map((work, i)=> (
            <div key={i} className='flex flex-col space-y-[24px] cursor-pointer '
                onClick={()=> {
                    router.push(`/Projects/${work.id}`)
                }}
            >
                <div className='bg-[#D9D9D9] rounded-[8px] w-full h-[280px] md:h-[435px]  ' 
                style={{
                    backgroundImage:`url('/${work.image}')`,
                    backgrounPosition:"contain",
                    backgroundSize:"contain"
                }}
                >

                </div>
                <div>
                    <h1 className='md:text-[20px] libre-reg md:leading-[28px] md:tracking-[0.6px] text-[18px] text-black libre-reg ' >
                        {work.name}
                    </h1>

                    <p className='text-[#787878] neue-reg text-[14px] ' >{work.text}</p>
                </div>
            </div>
        ))
    }



    </div>
  )
}

export default Work