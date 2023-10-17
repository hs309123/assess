import React from 'react'

const ProductSell = () => {
  return (
    <div className="lg:px-8 py-10 bg-white my-10">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold">Product Sell</h1>
        <div className="w-fit">
            <input type="text" placeholder="Search" className="w-[100px]" />
            <select>
                <option>Last 15 days</option>
                <option>Last 30 days</option>
                <option>Last 1 yr</option>
            </select>
        </div>
      </div>
        <table className="w-full text-left mt-4 gap-y-4 border-separate border-spacing-y-6">
          <tr className="border-b border-gray-300 opacity-50">
            <th className="w-[55%] md:w-[61%] lg:w-[70%]">Product Name</th>
            <th className="w-[15%] md:w-[13%] lg:w-[10%]">Stock</th>
            <th className="w-[15%] md:w-[13%] lg:w-[10%]">Price</th>
            <th className="w-[15%] md:w-[13%] lg:w-[10%]">Total Sales</th>
          </tr>

          <tr className="pt-10">
            <td className="flex justify-start items-center">
              <img className="h-12" src="Images/person.svg" alt="random" />
              <div className="flex flex-col justify-center items-start">
                <span>Abstract 3D</span>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
              </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>

          <tr className="pt-10">
            <td className="flex justify-start items-center">
              <img className="h-12" src="Images/person.svg" alt="random" />
              <div className="flex flex-col justify-center items-start">
                <span>Abstract 3D</span>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
              </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>

          <tr className="pt-10">
            <td className="flex justify-start items-center">
              <img className="h-12" src="Images/person.svg" alt="random" />
              <div className="flex flex-col justify-center items-start">
                <span>Abstract 3D</span>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
              </div>
            </td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
        </table>
    </div>
  )
}

export default ProductSell
