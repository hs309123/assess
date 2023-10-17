import React from 'react'

const CustomersCount = () => {
  return (
    <div className="w-full lg:w-1/3 bg-white h-[320px] rounded-xl flex flex-col justify-between items-center gap-4 p-4 pb-6">
      <div className="flex flex-col justify-center items-start w-full">
      <span className="text-2xl font-semibold">Customers</span>
      <span className="text-sm opacity-50 font-semibold">Customers that buy products</span>
    </div>
      <div className="w-[200px] h-[200px] relative flex justify-center items-center">
        <svg width="210px" height="210px">
          <circle cx="80" cy="80" r="70" strokeLinecap="round" stroke="#bd8cef" strokeWidth="20px" strokeDasharray="472" strokeDashoffset="165" fill="none" transform="rotate(-90,90,90)" />
          <circle cx="80" cy="80" r="70" strokeLinecap="round" stroke="red" strokeWidth="30px" strokeDasharray="472" strokeDashoffset="400" fill="none" transform="rotate(-90,90,90)" style={{zIndex:"20"}} />
        </svg>
        <div className="flex flex-col justify-center items-center absolute top-[35%] left-[25%]"><span className="text-xl font-black">65%</span><span className="text-xs font-medium">Total New <br /> Customers</span></div>
      </div>

    </div>
  )
}

export default CustomersCount
