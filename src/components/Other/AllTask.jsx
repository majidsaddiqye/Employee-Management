import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Completed Task</h5>
        <h5 className="w-1/5 text-lg font-medium ">Failed Task</h5>
      </div>

      <div className=" ">
        {authData.employees.map((elem, id) => {
          return (
            <div
              key={id}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-lg font-medium ">{elem.fname}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
