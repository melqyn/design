import React from 'react'

const HighlightPara = ({largetitle, paragraph}) => {
  return (
    <div className='bg-[#6c7f4c] p-8 mb-24 rounded-xl'>
        <h2 className="text-l font-semibold text-[#fafafa] text-opacity-70 pb-4">
          {largetitle}
        </h2>
      <p className='text-[#fafafa] leading-loose text-xl'>{paragraph}</p>
    </div>
  )
}

export default HighlightPara
