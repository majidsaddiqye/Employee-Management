import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-72 w-[300px] bg-green-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.taskCategory}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
        {data.taskDescription}
        </p>
        <div className='mt-5'>
            <button className='w-full bg-green-600 py-1 px-2 text-sm'>Completed Task</button>
        </div>
      </div>
  )
}

export default CompleteTask