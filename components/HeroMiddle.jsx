import React from 'react'

const HeroMiddle = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-end py-[90px] relative gap-[24px]overflow-hidden ' >
        <h1 className='text-[#212121] md:text-[146px] md:tracking-[-8.76px] text-[68px] leading-[70px] md:leading-[135px] tracking-[-4.08px] order-2 md:order-1 libre-reg protext ' >Product <br/> Designer. </h1>


        <div className='bg-[#D9D9D9]  h-[147px] w-[130px] rounded-[0.5px]  order-1 md:order-2 ' 
        style={{
            backgroundImage:'url("/Picture Web.png")',
            backgroundPosition:"contain",
            backgroundSize:"cover",
        }}
        >

        </div>

        <div className='w-[32px] h-[32px] ml-[-1px] mb-[-1px]  md:w-[48px] md:h-[48px] border-t-[#D7D7D7] border-r-[#D7D7D7] border-[1.5px] border-transparent  absolute bottom-0 left-0 ' >

        </div>
    </div>
  )
}

export default HeroMiddle