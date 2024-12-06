import React from 'react'

const NewTask = () => {
  return (
    <div className="h-72 w-[300px] bg-red-400 p-5 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
      <h4 className="text-sm">20 feb 2024</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
    <p className="text-sm mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      optio libero eaque praesentium fuga soluta!
    </p>
    <div className='mt-5'>
        <button className='bg-blue-600 py-1 px-2 text-sm'>Accept Task</button>
    </div>
  </div>
  )
}

export default NewTask