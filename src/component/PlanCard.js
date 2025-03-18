import React from 'react'

const PlanCard = () => {
  return (
    <div id='pricing-table' className='w-full my-6'>
        <h3 className='text-4xl font-bold mb-5'>Pricing Table</h3>
        <table className='w-full max-w-full border-2 text-center rounded-full'>
            <thead className='border-b-2 bg-blue-300 text-white'>
                <tr className='sm:text-3xl text-lg font-medium'>
                    <td className='sm:px-2 sm:py-6'><span className='rounded-tr-xl rounded-bl-xl sm:px-8 sm:py-2 sm:bg-blue-600'>Plan</span></td>
                    <td><span className='rounded-tr-xl rounded-bl-xl sm:px-8 sm:py-2 sm:bg-blue-600'>Price</span></td>
                    <td><span className='rounded-tr-xl rounded-bl-xl sm:px-4 sm:py-2 sm:bg-blue-600'>Discount</span></td>
                </tr>
            </thead>
            <tbody className='text-lg font-normal bg-blue-50'>
                <tr className='border-b-2 hover:shadow-lg'>
                    <td className='sm:p-4'>Silver</td>
                    <td>₹25,000.00</td>
                    <td>30%</td>
                </tr>
                <tr className='border-b-2 hover:shadow-lg'>
                    <td className='sm:p-4'>Gold</td>
                    <td>₹45,000.00</td>
                    <td>40%</td>
                </tr>
                <tr className='border-b-2 hover:shadow-lg'>
                    <td className='sm:p-4'>Platinum</td>
                    <td>₹75,000.00</td>
                    <td>50%</td>
                </tr>
                <tr className='border-b-2 hover:shadow-lg'>
                    <td className='sm:p-4'>Diamond</td>
                    <td>₹95,000.00</td>
                    <td>60%</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PlanCard