import React from 'react'

const Overview = () => {
  return (
    <div className="w-full lg:w-2/3 p-4 bg-white rounded-xl">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
            <span className="text-2xl font-semibold">Overview</span>
            <span className="text-sm font-semibold opacity-50">Monthly Earning</span>
        </div>
        <div>
            <select className="px-4 py-2 rounded-xl border border-gray-300 outline-none">
                <option>Weekly</option>
                <option>Quaterly</option>
                <option>Yearly</option>
            </select>
        </div>
      </div>
      <div className="grid grid-rows-[12] xl:grid-cols-12 mt-4 h-fit xl:h-[220px] gap-2">
        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[120px] xl:h-[120px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Jan</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[80px] xl:h-[80px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Feb</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[200px] xl:h-[200px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Mar</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[150px] xl:h-[150px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Apr</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[170px] xl:h-[170px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>May</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[60px] xl:h-[60px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Jun</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[170px] xl:h-[170px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Jul</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[200px] xl:h-[200px] xl:w-[50px] bg-[#5a32ea] rounded-xl"></div>
            <span>Aug</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[190px] xl:h-[190px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Sep</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[130px] xl:h-[130px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Oct</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[120px] xl:h-[120px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Nov</span>
        </div>

        <div className="flex flex-row-reverse xl:flex-col justify-end items-center gap-2">
            <div className="h-[50px] w-[135px] xl:h-[135px] xl:w-[50px] bg-[#f2efff] rounded-xl"></div>
            <span>Dec</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
