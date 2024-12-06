import React from "react";

const TaskListNumbers = ({loggedInUserData}) => {
  return (
    <div className="flex screen mt-10 justify-between gap-5">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#4CAF50]">
        <h2 className="text-2xl font-semibold">{loggedInUserData.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#2196F3]">
        <h2 className="text-2xl font-semibold">{loggedInUserData.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#c29a21]">
        <h2 className="text-2xl font-semibold">{loggedInUserData.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#607D8B]">
        <h2 className="text-2xl font-semibold">{loggedInUserData.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
