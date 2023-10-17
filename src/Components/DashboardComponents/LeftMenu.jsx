import React from 'react'

const LeftMenu = () => {
  return (
    <div className="h-[100vh] bg-[#040440] w-[280px] text-white py-8 px-4 flex flex-col justify-between items-start">
        <div className="w-full">
        <h1 className="text-3xl flex justify-start items-center gap-2 font-semibold"><img className="h-6" src="Images/nut.svg" alt="nut" />Dashboard</h1>
        <div className="mt-14">
            <ul className="flex flex-col gap-4">
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/dashboard.svg" alt="dashboard" />Dashboard</span><img src="Images/arrow-right.svg" alt="rightArrow" /></li>
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/product.svg" alt="Product" />Product</span><img src="Images/arrow-right.svg" alt="rightArrow"  /></li>
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/customers.svg" alt="Customers" />Customers</span><img src="Images/arrow-right.svg" alt="rightArrow"  /></li>
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/income.svg" alt="Income" />Income</span><img src="Images/arrow-right.svg" alt="rightArrow"  /></li>
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/promote.svg" alt="Promote" />Promote</span><img src="Images/arrow-right.svg" alt="rightArrow"  /></li>
                <li className="flex justify-between items-center text-xl opacity-60 hover:opacity-100 hover:bg-[#d4d4e440] cursor-pointer py-2 px-2 rounded-xl transition-all duration-150 ease-linear"><span className="flex justify-start items-center gap-2"><img className="h-4" src="Images/help.svg" alt="Help" />Help</span><img src="Images/arrow-right.svg" alt="rightArrow"  /></li>
                
            </ul>
        </div>
        </div>
        <div className="flex justify-between items-center w-full px-2 py-2 rounded-xl transition-all ease-in-out duration-200 hover:bg-[#d4d4e440] cursor-pointer">
            <div className="flex justify-start items-center gap-2">
            <img className="h-10 bg-white rounded-full" src="Images/person.svg" alt="person" />
            <div>
                <h1>Evano</h1>
                <span className="">Project Manager</span>
            </div>
            </div>
            <img className="h-6" src="Images/arrow-right.svg" alt="downArrow" />
        </div>
    </div>
  )
}

export default LeftMenu
