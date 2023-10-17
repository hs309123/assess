import React from 'react'

const FinancialSection = () => {
  return (
    <div className="my-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="flex justify-start items-center gap-2 p-6 w-fit bg-white rounded-xl">
            <div className="h-[100px] w-[100px] bg-[#e7fff2] rounded-full flex justify-center items-center"><img className="h-[50px]" src="Images/earning.svg" alt="earning" /></div>
            <div className="flex flex-col justify-center items-start">
                <span className="opacity-70 text-sm">Earning</span>
                <span className="text-xl font-semibold">$198k</span>
                <span>37.8% this month</span>
            </div>
        </div>

        <div className="flex justify-start items-center gap-2 p-6 w-fit bg-white rounded-xl">
            <div className="h-[100px] w-[100px] bg-[#e7dbff] rounded-full flex justify-center items-center"><img className="h-[50px]" src="Images/earning.svg" alt="earning" /></div>
            <div className="flex flex-col justify-center items-start">
                <span className="opacity-70 text-sm">Orders</span>
                <span className="text-xl font-semibold">$198k</span>
                <span>37.8% this month</span>
            </div>
        </div>

        <div className="flex justify-start items-center gap-2 p-6 w-fit bg-white rounded-xl">
            <div className="h-[100px] w-[100px] bg-[#ccf2ff] rounded-full flex justify-center items-center"><img className="h-[50px]" src="Images/earning.svg" alt="earning" /></div>
            <div className="flex flex-col justify-center items-start">
                <span className="opacity-70 text-sm">Balance</span>
                <span className="text-xl font-semibold">$198k</span>
                <span>37.8% this month</span>
            </div>
        </div>

        <div className="flex justify-start items-center gap-2 p-6 w-fit bg-white rounded-xl">
            <div className="h-[100px] w-[100px] bg-[#feb6dc] rounded-full flex justify-center items-center"><img className="h-[50px]" src="Images/earning.svg" alt="earning" /></div>
            <div className="flex flex-col justify-center items-start">
                <span className="opacity-70 text-sm">Earning</span>
                <span className="text-xl font-semibold">$198k</span>
                <span>37.8% this month</span>
            </div>
        </div>
    </div>
  )
}

export default FinancialSection
