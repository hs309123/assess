import React from 'react'
import FinancialSection from './RightbarComponents/FinancialSection'
import Overview from './RightbarComponents/Overview'
import CustomersCount from './RightbarComponents/CustomersCount'
import ProductSell from './RightbarComponents/ProductSell'

const Rightbar = () => {
  return (
    <div className="w-full px-10 py-10 bg-[#f5f6f8] h-[100vh] overflow-y-scroll">
      <div className="flex justify-between items-center w-full">
        <span className="text-xl font-semibold">Hello Sharukh Khan 👋</span>
        <input className="px-4 py-2 rounded-xl" placeholder="Search" />
      </div>

      <FinancialSection />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <Overview/>
        <CustomersCount />
      </div>

      <ProductSell />

    </div>
  )
}

export default Rightbar
