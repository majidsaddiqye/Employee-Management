import React from "react";

const TaskList = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex flex-wrap gap-5 py-5 mt-10 justify-start items-start">
      {/* Card with Updated Color */}
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
      </div>

      <div className="h-72 w-[300px] bg-green-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          optio libero eaque praesentium fuga soluta!
        </p>
      </div>

      <div className="h-72 w-[300px] bg-blue-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          optio libero eaque praesentium fuga soluta!
        </p>
      </div>

      <div className="h-72 w-[300px] bg-yellow-300 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          optio libero eaque praesentium fuga soluta!
        </p>
      </div>

      <div className="h-72 w-[300px] bg-[#607D8B] p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          optio libero eaque praesentium fuga soluta!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
