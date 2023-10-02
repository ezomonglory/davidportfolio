import React from 'react'
import { ArrowTopSvg, behanceSvg, igSvg, linkeinsvg } from '../data'

const FotterBottom = () => {
  return (
    <div className='flex   justify-between items-center flex-row mx-[16px] md:mx-[70px] border-[1px] border-t-[#D7D7D7] border-transparent pt-[32px] mb-[24px] md:mb-[54px] mt-[40px] md:mt-[80px] ' >

        <div className='flex flex-col md:flex-row gap-[12px] md:space-y-0  md:space-x-[24px] md:w-[50%] ' >
            <div className='text-[#505050] md:text-[18px] md:leading-[28px] neue-reg flex items-center justify-center bg-[#f5f5f5] rounded-[24px] w-max px-[16px] py-[8px] order-2 md:order-1 ' >
            dayviid02@gmail.com
            </div>

            <div className='flex space-x-[8px] w-full order-1 md:order-2 ' >
                <div className='bg-[#f5f5f5] rounded-full w-ma flex w-[52px] h-[52px] items-center justify-center  ' >
                {linkeinsvg}
                </div>

                <div className='bg-[#f5f5f5] rounded-full w-[52px] h-[52px] flex overflow-hidden items-center justify-center  ' >
                {behanceSvg}
                </div>

                <div className='bg-[#f5f5f5] rounded-full w-[52px] h-[52px] flex overflow-hidden items-center justify-center  ' >
                {igSvg}
                </div>
            </div>

        </div>
            <div className='bg-[#f5f5f5] rounded-full w-[52px] h-[52px] flex items-center justify-center p-[12px] ' >
                {ArrowTopSvg}
                </div>
    </div>
  )
}

export default FotterBottom